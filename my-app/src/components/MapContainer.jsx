// components/MapContainer.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';

const MapContainer = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const mapStyles = {
    height: '80vh',
    width: '100%',
  };

  const center = { lat: 40.748817, lng: -73.985428 };  // Example center (NYC)

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <div className="map-container">
        <SearchBar />
        <FilterOptions onFilterChange={handleFilterChange} />
        <GoogleMap mapContainerStyle={mapStyles} zoom={12} center={center}>
          {/* Sample marker */}
          <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default MapContainer;