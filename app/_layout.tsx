import { Stack } from 'expo-router';
import CatProvider from '~/providers/CatProvider';
import ThemeProvider from '~/providers/ThemeProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthProvider from '~/providers/AuthProvider';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <ThemeProvider>
          <CatProvider>
            <Stack screenOptions={{ headerShown: false }} />
          </CatProvider>
        </ThemeProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
