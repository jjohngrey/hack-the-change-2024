import 'package:flutter/material.dart';

class CustomSearchBar extends StatelessWidget {
  final Function(String) onSearch;
  final TextEditingController _controller = TextEditingController();

  CustomSearchBar({required this.onSearch});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: TextField(
        controller: _controller,
        decoration: InputDecoration(
          labelText: 'Search for haw places',
          suffixIcon: IconButton(
            icon: Icon(Icons.search),
            onPressed: () {
              onSearch(_controller.text);
            },
          ),
          border: OutlineInputBorder(),
        ),
        onSubmitted: onSearch,
      ),
    );
  }
}
