package com.oj.hacktochange2024;
import java.util.List;

public class User {
    private int id;
    private String first;
    private String last;
    private String password;
    private String email;
    private String gender;
    private List<String> preferences;

    //getters

    public int getId() {
        return id;
    };

    public String getFirst() {
        return first;
    };

    public String getLast() {
        return last;
    };

    public String getPassword() {
        return password;
    };

    public String getEmail() {
        return email;
    };

    public String getGender() {
        return gender;
    };

    public List<String> getPreferences() {
        return preferences;
    };

    //setters
    public void setId(int id) {
        this.id = id;
    };

    public void setFirst(String first) {
        this.first = first;
    };

    public void setLast(String last) {
        this.last = last;
    };

    public void setPassword(String password) {
        this.password = password;
    };

    public void setEmail(String email) {
        this.email =  email;
    };

    public void setGender(String gender) {
        this.gender = gender;
    };

    public void setPreferences(List<String> preferences) {
        this.preferences = preferences;
    };
}
