//app.config.js is used instead of config.json to allow .env variables
import 'dotenv/config';

export default ({ config }) => ({
  expo: {
    name: 'catting-hour',
    slug: 'catting-hour',
    version: '1.0.0',
    scheme: 'catting-hour',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.rspencer1220.cattinghour',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.rspencer1220.cattinghour',
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/favicon.png',
    },
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true,
    },
    plugins: [
      [
        'expo-location',
        {
          locationWhenInUsePermission: 'Show current location on map.',
        },
      ],
      [
        'expo-font',
        {
          fonts: ['./assets/fonts/OdinRounded.otf'],
        },
      ],
      'expo-router',
      [
        '@rnmapbox/maps',
        {
          RNMapboxMapsDownloadToken: process.env.EXPO_PUBLIC_MAPBOX_DOWNLOAD_TOKEN || '',
          RNMapboxMapsVersion: '11.0.0',
        },
      ],
    ],
  },
});
