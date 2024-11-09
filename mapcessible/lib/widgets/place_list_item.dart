import 'package:flutter/material.dart';
import '../models/place.dart';

class PlaceListItem extends StatelessWidget {
  final Place place;

  PlaceListItem({required this.place});

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(place.name),
      subtitle: Text(place.address),
      onTap: () {
        // Navigate to map view or place details
      },
    );
  }
}
