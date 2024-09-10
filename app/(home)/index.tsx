import { Stack } from 'expo-router';
import Map from '~/components/Map';
import SelectedCatSheet from '~/components/SelectedCatSheet';
import { Button } from '~/components/Button';
import { supabase } from '~/lib/supabase';

export default function Home() {
  return (
    <>
      <Stack.Screen />
      <Map />
      <SelectedCatSheet />
      {/* <Button title="Sign Out" onPress={() => supabase.auth.signOut()} /> */}
    </>
  );
}
