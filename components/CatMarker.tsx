import { CircleLayer, Images, ShapeSource, SymbolLayer } from '@rnmapbox/maps';
import BlackCat from '../assets/cat-icons/black-cat.png';
import { OnPressEvent } from '@rnmapbox/maps/lib/typescript/src/types/OnPressEvent';
import { featureCollection, point } from '@turf/helpers';
import { useCat } from '~/providers/CatProvider';

const CatMarker = () => {
  const { setSelectedCat, nearbyCats } = useCat();
  const points = nearbyCats.map((cat) => point([cat.long, cat.lat], { cat }));
  const catsFeatures = featureCollection(points);

  const onPointPress = async (e: OnPressEvent) => {
    // console.log(JSON.stringify(e, null, 2));
    if (e.features[0].properties?.cat) {
      setSelectedCat(e.features[0].properties.cat);
    }
  };

  return (
    <ShapeSource id="cats" cluster shape={catsFeatures} onPress={(e) => onPointPress(e)}>
      <SymbolLayer
        id="cat-icons"
        filter={['!', ['has', 'point_count']]}
        style={{
          iconImage: 'BlackCat',
          iconSize: 0.4,
          iconAnchor: 'bottom',
        }}
      />

      <CircleLayer
        id="clusters"
        filter={['has', 'point_count']}
        style={{
          circleColor: 'gray',
          circleRadius: 20,
          circleOpacity: 0.7,
          circleStrokeWidth: 2,
          circleStrokeColor: 'white',
        }}
      />

      <SymbolLayer
        id="cluster-count"
        filter={['has', 'point_count']}
        style={{
          textField: '{point_count}',
          textSize: 18,
          textColor: 'white',
          textHaloWidth: 0,
          textAnchor: 'center',
        }}
      />
      <Images
        images={{
          BlackCat,
        }}
      />
    </ShapeSource>
  );
};

export default CatMarker;
