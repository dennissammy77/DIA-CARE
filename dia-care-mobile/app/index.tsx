import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { router } from 'expo-router';

const image = {uri: `https://firebasestorage.googleapis.com/v0/b/studyhacks-file-upload.appspot.com/o/WhatsApp%20Image%202024-07-21%20at%2013.39.59_82aff391.jpg?alt=media&token=4a6d0a19-c8b8-4d17-89c5-9ddb67a65bf1`}
export default function SplashScreenPage() {
  useEffect(() => {
    const prepare = async () => {
      try {
        // Keep the splash screen visible
        await SplashScreen.preventAutoHideAsync();
        // Simulate a long running task (e.g. API call, loading assets, etc.)
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen and navigate to SignIn screen
        await SplashScreen.hideAsync();
        router.push('/home')
      }
    };

    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});
