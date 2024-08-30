import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import CatProvider from '~/providers/CatProvider';

export default function Layout() {
  return (
    <CatProvider>
      <Stack />
    </CatProvider>
  );
}
