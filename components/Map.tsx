import { Text } from 'react-native';
import Mapbox, { Camera, LocationPuck, MapView } from '@rnmapbox/maps';
import { useState } from 'react';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || '');

const Map = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <MapView
      style={{ flex: 1 }}
      styleURL={`mapbox://styles/mapbox/${darkMode ? 'dark' : 'light'}-v11`}>
      <Camera followUserLocation />
      <LocationPuck puckBearingEnabled puckBearing="heading" pulsing={{ isEnabled: true }} />
    </MapView>
  );
};

export default Map;
