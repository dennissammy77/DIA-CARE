import { View, Text, useColorScheme, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';
import { ADD_ICON, ARROW_LEFT_ICON, ARROW_RIGHT_ICON, DOT_ICON } from '@/constants/Icons';
import ChartComponent from '@/components/MealPlanChart';
import { Link } from 'expo-router';

const image = { uri: "https://firebasestorage.googleapis.com/v0/b/studyhacks-file-upload.appspot.com/o/WhatsApp%20Image%202024-07-20%20at%2011.22.19_f7f4ffc0.jpg?alt=media&token=05a8f2cb-e04f-4cb5-a9d3-0943b554b700" };


export default function MealPlan(){
  const colorScheme = useColorScheme();
  return(
    <ParallaxScrollView backgroundColor={colorScheme === 'light' ? Colors.secondaryBase : Colors.dark.background}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.header}>
          <ThemedView style={{marginRight:5,flexDirection:'row',alignItems:'center'}}>
            <ARROW_LEFT_ICON />
            <ThemedText type='title'>Your Meal plan</ThemedText>
          </ThemedView>
          <Link href={'/selectmealplan'} asChild>
            <TouchableOpacity>
              <ThemedView style={{alignItems:'center',width:30, height:30,padding:0,borderRadius:5,backgroundColor: Colors.secondary}}>
                <ADD_ICON size={24} style={{color: Colors.base}}/>
              </ThemedView>
            </TouchableOpacity>
          </Link>
        </ThemedView>
        <ThemedView style={{flex:1,flexDirection:'row',alignItems:'center'}}> 
          <ThemedText type='subtitle' style={{color:Colors.tertiary,fontWeight:'bold',marginRight:20}}>Today</ThemedText>
          <ThemedText type='subtitle' style={{color:Colors.tertiary,fontWeight:'bold',marginRight:20}}>Weekly</ThemedText>
          <ThemedText type='subtitle' style={{color:Colors.tertiary,fontWeight:'bold',marginRight:20}}>Monthly</ThemedText>
        </ThemedView>

        <ThemedView style={styles.cardContainer}>
          {/* Meal plan items */}
          <ThemedView style={{flex:1,flexDirection:'row',alignItems:'center'}}>
            <ChartComponent/>
            <ThemedView style={{flexDirection:'column', marginLeft:20}}>
              <ThemedView style={{flexDirection:'row',marginBottom:5}}>
                <ThemedView style={{backgroundColor:'#FF5C00',width:10,height:10,borderRadius:10,marginRight:5}}/>
                <ThemedView>
                  <ThemedText type='subtitle'>Carbs</ThemedText>
                  <ThemedText>152g</ThemedText>
                </ThemedView>
              </ThemedView>
              <ThemedView style={{flexDirection:'row',marginBottom:5}}>
                <ThemedView style={{backgroundColor:'#3DB649',width:10,height:10,borderRadius:10,marginRight:5}}/>
                <ThemedView>
                  <ThemedText type='subtitle'>Vitamins</ThemedText>
                  <ThemedText>50g</ThemedText>
                </ThemedView>
              </ThemedView>
              <ThemedView style={{flexDirection:'row',marginBottom:5}}>
                <ThemedView style={{backgroundColor:'#A6816C',width:10,height:10,borderRadius:10,marginRight:5}}/>
                <ThemedView>
                  <ThemedText type='subtitle'>Proteins</ThemedText>
                  <ThemedText>40g</ThemedText>
                </ThemedView>
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>

      <ThemedView style={{paddingHorizontal:10}}>
        <ThemedText type="title" style={{color:colorScheme === 'light'? '#000' : Colors.base, marginVertical: 0, marginHorizontal:10}}>Today meals</ThemedText>
        {meals?.map((item) =>{
          return(
            <ThemedView style={styles.cardContainer} key={item?.id}>
              <ThemedView style={{flexDirection:'row', alignItems:'center'}}>
                <Image source={image} style={{width:50,height:50,resizeMode:'cover',borderRadius:10}}/>
                <ThemedView style={{flex:1,flexDirection:'column', marginLeft: 10}}>
                  <ThemedText type="subtitle" style={{color:'#000'}}>{item?.title}</ThemedText>
                  <ThemedView style={{flexDirection:'row',alignItems:'center'}}>
                    <ThemedText type="default" style={{color:Colors.tertiary,fontWeight:'bold'}}>{item?.amount}g</ThemedText>
                    <DOT_ICON size={12} style={{color:Colors.tertiary}}/>
                    <ThemedText type="default" style={{color:Colors.tertiary,fontWeight:'bold'}}>{item?.type}</ThemedText>
                  </ThemedView>
                </ThemedView>
                <ARROW_RIGHT_ICON size={16}/>
              </ThemedView>
            </ThemedView>
          );
        })}
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
    marginVertical: 20,
  },
  cardContainer:{
    backgroundColor: Colors.base,
    padding: 20,
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


const meals = [
  {
    id: '1',
    title: 'Oats and BlueBerries',
    description: 'Whole grain oats with blueberries',
    date: 'June 15, 2024',
    time: '10:00 AM',
    amount: 12.4,
    type: 'breakfast'
  },{
    id: '2',
    title: 'Whole Grain Bread with Peanut Butter',
    description: 'Whole grain bread with peanut butter',
    date: 'July 10, 2024',
    time: '12:00 PM',
    amount: 12.4,
    type: 'lunch'
  },{
    id: '3',
    title: 'Grilled Salmon with Quinoa',
    description: 'Grilled salmon with quinoa',
    date: 'July 10, 2024',
    time: '12:00 PM',
    amount: 12.4,
    type: 'lunch'
  },{
    id: '4',
    title: 'Baked Salmon with Spinach',
    description: 'Baked salmon with spinach',
    date: 'July 15, 2024',
    time: '10:00 AM',
    amount: 12.4,
    type: 'dinner'
  }
]