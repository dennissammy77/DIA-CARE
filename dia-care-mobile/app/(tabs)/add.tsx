import { View, Text, useColorScheme, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { FOOD_ICON } from '@/constants/Icons';
import moment from 'moment';

interface DateProps{
  event?: any;
  selectedDate?: any;
  currentMode?: any;
  value?: any;
}
export default function ADD(){
  const colorScheme = useColorScheme();
  const [date, setDate] = useState(new Date(Date.now()));

  const getDate = () => {
    
    return moment(date).format('LLL');
  };
  const [glucose,setglucose]=useState(0);
  const [diastolic,setdisatolic]=useState(0);
  const [systolic,setsystolic]=useState(0);

  const HANDLE_SUBMIT=()=>{
    const data = {
      glucose:glucose,
      diastolic:diastolic,
      systolic:systolic,
      date: moment(date).format('YYYY-MM-DD')
    }
  }

  
  return (
    <ParallaxScrollView backgroundColor={colorScheme === 'light' ? Colors.secondaryBase : Colors.dark.background}>
      <ThemedView style={styles.container}>
        <ThemedText>App page</ThemedText>
        <ThemedView style={{marginTop:10}}>
          <ThemedView style={styles.cardContainer}>
            <ThemedView>
              <ThemedText style={{textAlign:'center',color:Colors.tertiary}}>GLUCOSE</ThemedText>
            </ThemedView>

            <ThemedView style={{backgroundColor:Colors.tertiary, marginVertical:10,paddingVertical:10, paddingHorizontal:10, borderRadius:10}}>
              <ThemedText>{getDate()}</ThemedText>
            </ThemedView>
            <Text>
              {glucose}{diastolic}{systolic}
            </Text>

            <ThemedView style={{backgroundColor:Colors.secondaryBase, marginVertical:10,paddingVertical:20, paddingHorizontal:10, borderRadius:20}}>
              <ThemedText style={{color:Colors.primary}}>Glucose level</ThemedText>
              <TextInput
                style={{ flex:1,height: 50, paddingHorizontal:10, paddingVertical: 5, marginTop: 20, backgroundColor: Colors.base, borderRadius:10 }}
                placeholder="mmol/l"
                keyboardType='numeric'
                value={glucose.toString()}
                onChangeText={text => setglucose(text)}
              />
            </ThemedView>

            <ThemedView style={{backgroundColor:'#deffcc', marginVertical:10,paddingVertical:20, paddingHorizontal:10, borderRadius:20}}>
              <ThemedText style={{color:'#1d661d'}}>Diastolic level</ThemedText>
              <TextInput
                style={{ flex:1,height: 50, paddingHorizontal:10, paddingVertical: 5, marginTop: 20, backgroundColor: Colors.base, borderRadius:10 }}
                placeholder="diastolic bp"
                keyboardType='numeric'
                value={diastolic.toString()}
                onChangeText={text => setdisatolic(text)}
              />
            </ThemedView>

            <ThemedView style={{backgroundColor:'#e8edff', marginVertical:10,paddingVertical:20, paddingHorizontal:10, borderRadius:20}}>
              <ThemedText style={{color:'#456dff'}}>Systolic level</ThemedText>
              <TextInput
                style={{ flex:1,height: 50, paddingHorizontal:10, paddingVertical: 5, marginTop: 20, backgroundColor: Colors.base, borderRadius:10 }}
                placeholder="systolic bp"
                keyboardType='numeric'
                value={systolic.toString()}
                onChangeText={text => setsystolic(text)}
              />
            </ThemedView>

            

            <ThemedView style={{flexDirection:'row', justifyContent:'space-between', marginTop:10,  borderRadius: 20, height: 150, }}>
              
              <ThemedView style={{borderRadius:20, flex:1,marginRight:5, backgroundColor: Colors.tertiary, padding:10,alignItems:'center',justifyContent:'center'}}>
                <ThemedView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <FOOD_ICON size={48}/>
                </ThemedView>
                <ThemedText style={{color:Colors.light.text, fontWeight:'bold'}}>Before Meal</ThemedText>
              </ThemedView>
              
              <ThemedView style={{borderRadius:20, flex:1,marginRight:5, backgroundColor: Colors.tertiary, padding:10,alignItems:'center',justifyContent:'center'}}>
                <ThemedView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <FOOD_ICON size={48} name='food-apple-outline'/>
                </ThemedView>
                <ThemedText style={{color:Colors.light.text, fontWeight:'bold'}}>After Meal</ThemedText>
              </ThemedView>

            </ThemedView>

            <ThemedView>

            </ThemedView>

          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  cardContainer:{
    backgroundColor: Colors.base,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 0,
    borderRadius: 10,
    shadowColor: Colors.tertiary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
    padding: 10,
  },
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20
  }
});