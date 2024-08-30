import { Stack, Link } from 'expo-router';
import Map from '~/components/Map';
import { Text } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Map />
    </>
  );
}
