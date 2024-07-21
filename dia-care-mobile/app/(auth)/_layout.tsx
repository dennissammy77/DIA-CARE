import { Redirect, Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
            display: 'none',
        },
      }}
      >
      <Tabs.Screen
        name="signin"
        options={{
          title: 'SignIn',
          tabBarShowLabel:false,
          headerShown: false,
          href:'/signin'
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          title: 'SignUp',
          tabBarShowLabel:false,
          href:'signup',
          headerShown: false
        }}
      />
    </Tabs>
  );
}
