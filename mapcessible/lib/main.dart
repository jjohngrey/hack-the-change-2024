import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'providers/place_provider.dart';
import 'screens/search_page.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

Future<void> main() async {
  await dotenv.load(); // Load environment variables
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final apiKey = dotenv.env['GOOGLE_MAPS_API_KEY'];

    return ChangeNotifierProvider(
      create: (_) => PlaceProvider(),
      child: MaterialApp(
        title: 'mapcessible',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: SearchPage(),
      ),
    );
  }
}
