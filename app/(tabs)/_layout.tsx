import { Redirect, Tabs } from 'expo-router';
import { useAuth } from '~/providers/AuthProvider';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  const { isAuthenticated } = useAuth();
  console.log('Authenticated: ', isAuthenticated);

  if (!isAuthenticated) {
    return <Redirect href="/auth" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'purple',
        tabBarStyle: {
          height: 100,
          paddingBottom: 40, // Optional: Add padding to adjust the content within the tab bar
          paddingTop: 20, // Optional: Add padding to adjust the content within the tab bar
        },
        tabBarLabelStyle: {
          fontSize: 13, // Optional: Adjust font size for labels
          fontFamily: 'OdinRounded',
        },
      }}>
      <Tabs.Screen
        name="saved"
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: () => <FontAwesome name="heart" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="recent"
        options={{
          tabBarLabel: 'Recent',
          tabBarIcon: () => <Ionicons name="newspaper-sharp" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: () => <FontAwesome name="map" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: () => <FontAwesome name="plus" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <FontAwesome5 name="user-alt" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
