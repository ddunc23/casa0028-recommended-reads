import * as React from 'react';
import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

function MapDisplay(props) {
  return (
    <Map
      initialViewState={{
        longitude: props.longitude,
        latitude: props.latitude,
        zoom: 14
      }}
      style={{width: '100%', height: '100vh'}}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    />
  );
}

export default MapDisplay;