import { CircleLayer, Images, ShapeSource, SymbolLayer } from '@rnmapbox/maps';
import WhiteCat from '../assets/cat-icons/white-cat.png';
import BlackCat from '../assets/cat-icons/black-cat.png';
import BrownCat from '../assets/cat-icons/brown-cat.png';
import CalicoCat from '../assets/cat-icons/calico-cat.png';
import WhiteOrangeCat from '../assets/cat-icons/white-orange-cat.png';
import OrangeWhiteCat from '../assets/cat-icons/orange-white.png';
import SiameseCat from '../assets/cat-icons/siamese-cat.png';
import TuxedoCat from '../assets/cat-icons/tuxedo-cat.png';
import GrayWhiteCat from '../assets/cat-icons/gray-white.png';
import GrayCat from '../assets/cat-icons/gray-cat.png';
import { OnPressEvent } from '@rnmapbox/maps/lib/typescript/src/types/OnPressEvent';
import data from '../data/cats.json';
import { featureCollection, point } from '@turf/helpers';
import { useCat } from '~/providers/CatProvider';

const catIcons = {
  'White Cat': 'WhiteCat',
  'Black Cat': 'BlackCat',
  'Brown Cat': 'BrownCat',
  'Calico Cat': 'CalicoCat',
  'White-Orange Cat': 'WhiteOrangeCat',
  'Orange-White Cat': 'OrangeWhiteCat',
  'Siamese Cat': 'SiameseCat',
  'Tuxedo Cat': 'TuxedoCat',
  'Gray-White Cat': 'GrayWhiteCat',
  'Gray Cat': 'GrayCat',
};

const CatMarker = () => {
  const points = data.map((cat) => point([cat.long, cat.lat], { cat }));
  const catsFeatures = featureCollection(points);

  const { selectedCat, setSelectedCat } = useCat();

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
