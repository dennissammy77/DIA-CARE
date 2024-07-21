import { View, Text, StyleSheet, useColorScheme, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { Colors } from '@/constants/Colors'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { ADD_ICON, ARROW_LEFT_ICON, DONE_ICON, SEARCH_ICON } from '@/constants/Icons';
import { router } from 'expo-router'

const image = { uri: "https://firebasestorage.googleapis.com/v0/b/studyhacks-file-upload.appspot.com/o/WhatsApp%20Image%202024-07-20%20at%2011.22.19_f7f4ffc0.jpg?alt=media&token=05a8f2cb-e04f-4cb5-a9d3-0943b554b700" };

export default function SELECT_PLAN (){
  const colorScheme = useColorScheme();
  return (
    <ParallaxScrollView backgroundColor={colorScheme === 'light' ? Colors.secondaryBase : Colors.dark.background}>
      
      <ThemedView style={styles.container}>
       
        <ThemedView style={styles.header}>
          <ThemedView style={{marginRight:5,flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity onPress={(()=>{router.back()})}>
              <ARROW_LEFT_ICON />
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>
        <ThemedView style={{marginTop:5}}>
          <ThemedText type="heading" style={{color: '#000'}}>Select a plan</ThemedText>
        </ThemedView>
        <ThemedView style={{flexDirection:'row',alignItems:'center',paddingHorizontal: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 10}}>
          <SEARCH_ICON/>
          <TextInput
            style={{ flex:1,height: 50, marginLeft:5 }}
            placeholder="Search plans"
            // onChangeText={text => setSearchText(text)}
          />
        </ThemedView>

        <ThemedView>
          <ThemedText type="subtitle" style={{color:'#000', marginVertical:5}}>Available meals</ThemedText>
          {Array.from({length: 5}).map((_, index) => (
            <ThemedView key={index} style={styles.cardContainer}>
              <ImageBackground source={image} resizeMode='cover' imageStyle={{borderRadius:10}} style={{width:'auto', height:'auto',padding:20}}>
                <ThemedView style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                  <ThemedView style={{flex:1}}>
                    <ThemedText type="subtitle" style={{color: '#000'}}>Plan {index + 1}</ThemedText>
                    <ThemedText type="default" style={{color: '#000', marginTop: 5}}>10 days, $50/day</ThemedText>
                  </ThemedView>
                  <ThemedView style={{width:30,height:30,alignItems:'center',justifyContent:'center', borderRadius:20, backgroundColor:index%2=== 0? Colors.base:Colors.secondary}}>
                    {index % 2 === 0 ?
                      <ADD_ICON size={16} style={{color:Colors.secondary}}/>
                    :
                      <DONE_ICON size={16} style={{color:Colors.base}}/>
                    }
                  </ThemedView>
                </ThemedView>
              </ImageBackground>
            </ThemedView>
          ))}
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
    marginVertical: 5,
  },
  cardContainer:{
    backgroundColor: Colors.base,
    padding: 0,
    marginVertical: 5,
    marginHorizontal: 0,
    borderRadius: 10,
    shadowColor: Colors.tertiary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  container: {
    flex: 1,
    padding: 20,
  }
});