import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import '../models/place.dart';

class MapPage extends StatelessWidget {
  final Place place;

  MapPage({required this.place});

  @override
  Widget build(BuildContext context) {
    final LatLng position = LatLng(place.latitude, place.longitude);

    return Scaffold(
      appBar: AppBar(title: Text(place.name)),
      body: GoogleMap(
        initialCameraPosition: CameraPosition(
          target: position,
          zoom: 14,
        ),
        markers: {
          Marker(
            markerId: MarkerId(place.name),
            position: position,
            infoWindow: InfoWindow(title: place.name, snippet: place.address),
          ),
        },
      ),
    );
  }
}
