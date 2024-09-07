import { Stack } from 'expo-router';
import Map from '~/components/Map';
import { Text } from 'react-native';
import SelectedCatSheet from '~/components/SelectedCatSheet';

export default function Home() {
  return (
    <>
      <Stack.Screen />
      <Map />
      <SelectedCatSheet />
    </>
  );
}
