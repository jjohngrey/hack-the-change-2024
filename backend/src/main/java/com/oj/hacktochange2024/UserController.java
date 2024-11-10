package com.oj.hacktochange2024;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api")

public class UserController {
    private static final String FILE_PATH = "C:\\Users\\owens\\Downloads\\hacktochange2024\\hacktochange2024\\src\\main\\resources\\users.json";

    private List<User> loadUsers() throws IOException {
        List<User> users = new ArrayList<>();
        
        if (Files.exists(Paths.get(FILE_PATH))) {
            String content = Files.readString(Paths.get(FILE_PATH));
            JSONArray jsonArray = new JSONArray(content);
            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject jsonObject = jsonArray.getJSONObject(i);
                User user = new User();
                user.setId(jsonObject.getInt("id"));
                user.setFirst(jsonObject.getString("first"));
                user.setLast(jsonObject.getString("last"));
                user.setPassword(jsonObject.getString("password"));
                user.setEmail(jsonObject.getString("email"));
                user.setGender(jsonObject.getString("gender"));

                JSONArray prefArray = jsonObject.getJSONArray("preferences");
                List<String> preferences = new ArrayList<>();
                for (int j = 0; j < prefArray.length(); j++) {
                    preferences.add(prefArray.getString(j));
                }
                user.setPreferences(preferences);
                
                users.add(user);
            }
        }

        return users;
    }

    private void saveUsers(List<User> users) throws IOException {
        JSONArray jsonArray = new JSONArray();
        
        for (User user : users) {
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("id", user.getId());
            jsonObject.put("first", user.getFirst());
            jsonObject.put("last", user.getLast());
            jsonObject.put("gender", user.getGender());
            jsonObject.put("password", user.getPassword());
            jsonObject.put("email", user.getEmail());
            jsonObject.put("preferences", new JSONArray(user.getPreferences()));
            jsonArray.put(jsonObject);
        }

        Files.writeString(Paths.get(FILE_PATH), jsonArray.toString());
    }

    private void replaceUser(int oldId, User Updated) throws IOException {
        List<User> users = loadUsers();

        Optional<User> user = users.stream()
                .filter(u -> u.getId() == oldId)
                .findFirst();

        if (user.isPresent()) {
            for (int i = 0; i<users.size(); i++) {
                if (users.get(i).getId() == oldId) {
                    users.set(i, Updated);
                }
            }
        }
    }

    @PostMapping(value="/users",  produces = "application/json")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        System.out.println(user);
        try {


            List<User> users = loadUsers();
            System.out.println(2);

            user.setId(users.size() + 1); // Simple ID generation
            users.add(user);
            System.out.println(System.getProperty("user.dir"));
            saveUsers(users);

            return new ResponseEntity<>(user, HttpStatus.CREATED);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving user data");
        }
        //return "ok";
    }

    @PostMapping(value = "/login", consumes = "application/x-www-form-urlencoded")
    public ResponseEntity<String> login(@RequestParam (name = "id") int id, @RequestParam (name = "password") String password) {
        try {
            List<User> users = loadUsers();
            Optional<User> user = users.stream()
                    .filter(u -> u.getId() == id && u.getPassword().equals(password))
                    .findFirst();

            return user.isPresent() ? ResponseEntity.ok("Login successful")
                                    : ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error loading user data");
        }
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUser(@PathVariable (name = "id") int id) {
        try {
            List<User> users = loadUsers();

            Optional<User> user = users.stream()
                .filter(u -> u.getId() == id)
                .findFirst();

            return user.isPresent() ? ResponseEntity.ok(user.get())
                                    : ResponseEntity.status(404).body(null);
        
        } catch (Exception e) {
            

            return ResponseEntity.status(500).body(null);
        }
    }

    @PatchMapping("/users/{id}")
    public ResponseEntity<User> patchUser(@PathVariable (name = "id") int id,
        @RequestParam(required = false, name = "first") String first,
        @RequestParam(required = false, name = "last") String last,
        @RequestParam(required = false, name = "email") String email,
        @RequestParam(required = false, name = "gender") String gender,
        @RequestParam(required = false, name = "preferences") List<String> preferences) {

        try {
            List<User> users = loadUsers();

            Optional<User> user = users.stream()
                .filter(u -> u.getId() == id)
                .findFirst();

            if (user.isPresent()) {
                User userData = user.get();

                if (first != null) {
                    userData.setFirst(first);
                }
                System.out.println(first);

                if (last != null) {
                    userData.setLast(last);
                }
                System.out.println(last);

                if (email != null) {
                    userData.setEmail(email);
                }
                System.out.println(email);

                if (gender != null) {
                    userData.setGender(gender);;
                }
                System.out.println(gender);
                
                if (preferences != null) {
                    userData.setPreferences(preferences);;
                }

                replaceUser(id, userData);

                return ResponseEntity.ok(userData);
            } else {
                return ResponseEntity.status(404).body(null);
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }
}
