// components/MapContainer.js
import React, { useState } from 'react';
<<<<<<< HEAD
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Searchbar from './Searchbar';
=======
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import SearchBar from './SearchBar';
>>>>>>> refs/remotes/origin/main
import FilterOptions from './FilterOptions';

// const MapContainer = () => {
//   const [selectedFilters, setSelectedFilters] = useState([]);

//   const mapStyles = {
//     height: '80vh',
//     width: '100%',
//   };

//   const center = { lat: 40.748817, lng: -73.985428 };  // Example center (NYC)

//   const handleFilterChange = (filters) => {
//     setSelectedFilters(filters);
//   };

//   return (
//     <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
//       <div className="map-container">
//         <SearchBar />
//         <FilterOptions onFilterChange={handleFilterChange} />
//         {/* <GoogleMap mapContainerStyle={mapStyles} zoom={12} center={center}>
//           <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
//         </GoogleMap> */}
//       </div>
//     </LoadScript>
//   );
// };

// export default MapContainer;

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);

    const mapStyles = {
    height: '80vh',
    width: '100%',
  };

  //maps api
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: 'process.env.REACT_APP_GOOGLE_MAPS_API_KEY'
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          alert('Could not fetch your location')
        }
      );
    } else {
      alert('Geolocation is not supported by this browser')
    }
  }, []);

  if (!isLoaded || !userLocation) {
    return <div>Loading...</div>;
  }

  return (
<<<<<<< HEAD
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <div className="map-container">
        <Searchbar />
        <FilterOptions onFilterChange={handleFilterChange} />
        {/* <GoogleMap mapContainerStyle={mapStyles} zoom={12} center={center}>
          <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
        </GoogleMap> */}
      </div>
    </LoadScript>
=======
    <GoogleMap
      center={userLocation}
      zoom={12}
      mapContainerStyle={mapStyles}
    >
      {/* Place a marker at the user's location */}
      <Marker position={userLocation} />
    </GoogleMap>
>>>>>>> refs/remotes/origin/main
  );
};

export default Map;