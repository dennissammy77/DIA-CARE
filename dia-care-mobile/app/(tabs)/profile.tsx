import { View, Text, StyleSheet, useColorScheme, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { ARROW_LEFT_ICON } from '@/constants/Icons';
import { ThemedText } from '@/components/ThemedText';

const image = { uri: "https://firebasestorage.googleapis.com/v0/b/studyhacks-file-upload.appspot.com/o/WhatsApp%20Image%202024-07-20%20at%2011.22.19_f7f4ffc0.jpg?alt=media&token=05a8f2cb-e04f-4cb5-a9d3-0943b554b700" };

export default function Profile(){
  const colorScheme = useColorScheme();
  return(
    <ParallaxScrollView backgroundColor={colorScheme === 'light' ? Colors.secondaryBase : Colors.dark.background}>
      <ThemedView style={styles.container}>
        
        <ThemedView style={styles.header}>
            <ThemedView style={{marginRight:5,flexDirection:'row',alignItems:'center'}}>
              <TouchableOpacity onPress={(()=>{router.back()})}>
                <ARROW_LEFT_ICON />
              </TouchableOpacity>
              <ThemedText style={{alignItems:'center',justifyContent:'center'}}>Health Info</ThemedText>
            </ThemedView>
        </ThemedView>

        {/**Profile Picture */}
        <ThemedView style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
          <Image source={image} resizeMode='cover' style={{width:200, height:200, borderRadius:100}}/>
        </ThemedView>

        {/**Profile Info */}

        <ThemedView>
        </ThemedView>      
      </ThemedView>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  header:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-start',
    padding:20,
    backgroundColor: Colors.secondaryBase,
  }
});
