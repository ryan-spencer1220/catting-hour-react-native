import { Stack } from 'expo-router';
import CatProvider from '~/providers/CatProvider';

export default function Layout() {
  return (
    <CatProvider>
      <Stack />
    </CatProvider>
  );
}
