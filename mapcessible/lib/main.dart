import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'providers/place_provider.dart';
import 'screens/search_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => PlaceProvider(),
      child: MaterialApp(
        title: 'AccessMap',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: SearchPage(),
      ),
    );
  }
}
  