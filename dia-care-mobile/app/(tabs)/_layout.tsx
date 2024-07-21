import { Redirect, Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ADD_ICON, BURGER_ICON, GLUCOSE_ICON, HOME_ICON, PERSON_ICON } from '@/constants/Icons';
import { Text, View } from 'react-native';
import { useSession } from '@/context/provider';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/signup" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary || Colors.dark.background,
        headerShown: false,
        tabBarStyle:{
          backgroundColor: colorScheme === 'light'? Colors.base : Colors.dark.background,
          height: 80,
          elevation: 0,
          shadowColor: 'transparent',
          shadowOpacity: 0,
          shadowRadius: 0,
          alignItems: 'center',
          justifyContent: 'space-around',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }
      }}
      >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarShowLabel:false,
          tabBarIcon: ({ color, focused }) => (
            <View style={{alignItems:'center',width:50, height:50,padding:10,borderRadius:10,backgroundColor:focused ? Colors.secondary : Colors.secondaryBase}}>
              <HOME_ICON style={{color: focused ? Colors.base : '#000'}}/>
            </View>
          ),
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="mealPlan"
        options={{
          title: 'Meal Plan',
          tabBarShowLabel:false,
          href:'/mealPlan',
          tabBarIcon: ({ color, focused }) => (
            <View style={{alignItems:'center',width:50, height:50,padding:10,borderRadius:10,backgroundColor:focused ? Colors.secondary : Colors.secondaryBase}}>
              <BURGER_ICON style={{color: focused ? Colors.base : '#000'}}/>
            </View>
          ),
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Add',
          tabBarShowLabel:false,
          href:'/add',
          tabBarIcon: ({ color, focused }) => (
            <View style={{alignItems:'center',width:50, height:50,padding:10,borderRadius:10,backgroundColor:focused ? Colors.secondary : Colors.primary}}>
              <ADD_ICON style={{color: focused ? Colors.base : '#000'}}/>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="glucose"
        options={{
          title: 'Glucose',
          tabBarShowLabel:false,
          href:'/glucose',
          tabBarIcon: ({ color, focused }) => (
            <View style={{alignItems:'center',width:50, height:50,padding:10,borderRadius:10,backgroundColor:focused ? Colors.secondary : Colors.secondaryBase}}>
              <GLUCOSE_ICON style={{color: focused ? Colors.base : '#000'}}/>
            </View>
          ),
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarShowLabel:false,
          href:'/profile',
          tabBarIcon: ({ color, focused }) => (
            <View style={{alignItems:'center',width:50, height:50,padding:10,borderRadius:10,backgroundColor:focused ? Colors.secondary : Colors.secondaryBase}}>
              <PERSON_ICON style={{color: focused ? Colors.base : '#000'}}/>
            </View>
          ),
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="selectmealplan"
        options={{
          title: 'SelectmealPlan',
          tabBarShowLabel:false,
          href:null,
          tabBarIcon: ({ color, focused }) => (
            <View style={{alignItems:'center',width:50, height:50,padding:10,borderRadius:10,backgroundColor:focused ? Colors.secondary : Colors.secondaryBase}}>
              <PERSON_ICON style={{color: focused ? Colors.base : '#000'}}/>
            </View>
          ),
          headerShown: false
        }}
      />
    </Tabs>
  );
}
