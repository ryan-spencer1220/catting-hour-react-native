import { Stack } from 'expo-router';
import Map from '~/components/Map';
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
