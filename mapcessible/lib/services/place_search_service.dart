import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/place.dart';

class PlaceSearchService {
  final String apiKey = 'YOUR_GOOGLE_PLACES_API_KEY';

  Future<List<Place>> searchPlaces(String query) async {
    final url = Uri.parse(
        'https://maps.googleapis.com/maps/api/place/textsearch/json?query=$query&key=$apiKey');
    final response = await http.get(url);

    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      final List results = data['results'];
      return results.map((json) => Place.fromJson(json)).toList();
    } else {
      throw Exception('Failed to load places');
    }
  }
}
