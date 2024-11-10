import Flutter
import UIKit
import GoogleMaps                                          // Add this import

@main
@objc class AppDelegate: FlutterAppDelegate {
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {
    GeneratedPluginRegistrant.register(with: self)

    // TODO: Add your Google Maps API key
    // final string apiKey = dotenv.env['GOOGLE_MAPS_API_KEY'] ?? 'API_KEY_NOT_FOUND';
    GMSServices.provideAPIKey("")               // Add this line

    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }
}