import { Text, Image, StyleSheet, View } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useCat } from '~/providers/CatProvider';
import { useEffect, useRef } from 'react';
import { Button } from './Button';

const catIcons = {
  'White Cat': require('../assets/cat-icons/white-cat.png'),
  'Black Cat': require('../assets/cat-icons/black-cat.png'),
  'Brown Cat': require('../assets/cat-icons/brown-cat.png'),
  'Calico Cat': require('../assets/cat-icons/calico-cat.png'),
  'White/Orange Cat': require('../assets/cat-icons/white-orange-cat.png'),
  'Orange/White Cat': require('../assets/cat-icons/orange-white.png'),
  'Siamese Cat': require('../assets/cat-icons/siamese-cat.png'),
  'Tuxedo Cat': require('../assets/cat-icons/tuxedo-cat.png'),
  'Gray White Cat': require('../assets/cat-icons/gray-white.png'),
  'Gray Cat': require('../assets/cat-icons/gray-cat.png'),
};

const SelectedCatSheet = () => {
  const { selectedCat } = useCat();
  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    if (selectedCat) {
      bottomSheetRef.current?.expand();
    }
  }, [selectedCat]);

  const determineCatIcon = (): number => {
    const catType = selectedCat?.type as keyof typeof catIcons;
    return catIcons[catType] || catIcons['Tuxedo Cat'];
  };

  return (
    <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={[200]} enablePanDownToClose>
      <BottomSheetView style={styles.container}>
        <View style={styles.row}>
          <View>
            <Text style={styles.heading}>{selectedCat?.name}</Text>
            <Text style={styles.text}>Last Visited: {selectedCat?.last_seen}</Text>
            <Text style={styles.text}>Personality: {selectedCat?.personality}</Text>
          </View>
          <View style={styles.column}>
            <Image source={determineCatIcon()} style={{ width: 50, height: 50 }} />
            <Text style={styles.text}>{selectedCat?.type}</Text>
          </View>
        </View>
        <Button title={`Learn More About ${selectedCat?.name}`}></Button>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  column: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'OdinRounded',
    fontSize: 30,
  },
  text: {
    fontFamily: 'OdinRounded',
    fontSize: 20,
  },
});

export default SelectedCatSheet;
