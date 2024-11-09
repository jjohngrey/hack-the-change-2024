import 'package:flutter/material.dart';
import '../models/place.dart';
import '../services/place_search_service.dart';

class PlaceProvider with ChangeNotifier {
  final PlaceSearchService _placeSearchService = PlaceSearchService();
  List<Place> _places = [];
  bool _isLoading = false;

  List<Place> get places => _places;
  bool get isLoading => _isLoading;

  Future<void> searchPlaces(String query) async {
    _isLoading = true;
    notifyListeners();

    try {
      _places = await _placeSearchService.searchPlaces(query);
    } catch (e) {
      // Handle error (e.g., show a snackbar)
      _places = [];
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }
}
