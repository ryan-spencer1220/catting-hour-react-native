import Mapbox, { Camera, LocationPuck, MapView } from '@rnmapbox/maps';
import { useState } from 'react';
import CatMarker from './CatMarker';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || '');

const Map = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <MapView
      style={{ flex: 1 }}
      styleURL={`mapbox://styles/mapbox/${darkMode ? 'dark' : 'light'}-v11`}
      scaleBarEnabled={false}
      logoEnabled={false}
      attributionEnabled={false}>
      <Camera followUserLocation />
      <LocationPuck puckBearingEnabled puckBearing="heading" pulsing={{ isEnabled: true }} />
      <CatMarker />
    </MapView>
  );
};

export default Map;
