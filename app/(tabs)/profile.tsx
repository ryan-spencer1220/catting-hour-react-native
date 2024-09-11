import { View, Text } from 'react-native';
import { Button } from '~/components/Button';
import { supabase } from '~/lib/supabase';

export default function Profile() {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
    </View>
  );
}
