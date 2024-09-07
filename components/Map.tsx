import Mapbox, { Camera, LocationPuck, MapView } from '@rnmapbox/maps';
import CatMarker from './CatMarker';
import { useTheme } from '~/providers/ThemeProvider';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || '');

const Map = () => {
  const { darkMode } = useTheme();

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
