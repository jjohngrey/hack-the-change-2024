import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/place_provider.dart';
import '../widgets/search_bar.dart';
import '../widgets/place_list_item.dart';

class SearchPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final placeProvider = Provider.of<PlaceProvider>(context);

    return Scaffold(
      appBar: AppBar(title: Text('mapcessible')),
      body: Column(
        children: [
          CustomSearchBar(onSearch: (query) {
            placeProvider.searchPlaces(query);
          }),
          Expanded(
            child: placeProvider.isLoading
                ? Center(child: CircularProgressIndicator())
                : ListView.builder(
                    itemCount: placeProvider.places.length,
                    itemBuilder: (context, index) {
                      final place = placeProvider.places[index];
                      return PlaceListItem(place: place);
                    },
                  ),
          ),
        ],
      ),
    );
  }
}
