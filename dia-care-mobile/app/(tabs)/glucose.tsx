import { View, Text, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { PieChart, BarChart } from "react-native-gifted-charts";
import { GLUCOSE_ICON } from '@/constants/Icons';

export default function GLUCOSE(){
  const colorScheme = useColorScheme();
  return (
    <ParallaxScrollView backgroundColor={colorScheme === 'light' ? Colors.secondaryBase : Colors.dark.background}>
      <ThemedView style={styles.container}>
        
        <ThemedView style={styles.header}>
          <ThemedView style={{marginRight:5,flexDirection:'row',alignItems:'center'}}>
            <ThemedView style={{flexDirection:'column'}}>
              <ThemedText type='subtitle' style={{fontSize:28}}>Blood Sugar</ThemedText>
              <ThemedText type='subtitle' style={{fontSize:28}}>Analytics</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedView style={{flex:1,flexDirection:'row',alignItems:'center',marginVertical:20}}> 
          <ThemedView style={{paddingVertical:5, paddingHorizontal:10,marginRight:10,borderRadius:20,backgroundColor: Colors.secondary, flexDirection:'row', alignItems:'center'}}>
            <ThemedText type='subtitle' style={{color:Colors.dark.text,fontWeight:'bold'}}>Today</ThemedText>
          </ThemedView>
          <ThemedView style={{paddingVertical:5, paddingHorizontal:10,marginRight:10,borderRadius:20,backgroundColor: Colors.base, flexDirection:'row', alignItems:'center'}}>
            <ThemedText type='subtitle' style={{color:Colors.light.text,fontWeight:'bold'}}>Weekly</ThemedText>
          </ThemedView>
          <ThemedView style={{paddingVertical:5, paddingHorizontal:10,marginRight:10,borderRadius:20,backgroundColor: Colors.base, flexDirection:'row', alignItems:'center'}}>
            <ThemedText type='subtitle' style={{color:Colors.light.text,fontWeight:'bold'}}>Monthly</ThemedText>
          </ThemedView>
        </ThemedView>

        <PieChartComponent/>

        <BarChartComponent/>

      </ThemedView>
    </ParallaxScrollView>
  )
}

const PieChartComponent = () => {
  const pieData = [
      {value: 54, color: '#177AD5', text: '54%'},
      {value: 40, color: '#79D2DE', text: '30%'},
  ];
  
  return(
      <ThemedView style={styles.cardContainer}>
        <ThemedView style={{flexDirection:'row',alignItems:'center',marginVertical:10}}>
          <PieChart
            donut
            radius={60}
            innerRadius={40}
            data={pieData}
            centerLabelComponent={() => {
              return (
                <ThemedView style={{justifyContent: 'center', alignItems: 'center'}}>
                  <ThemedText style={{fontSize: 22, color: Colors.light.text, fontWeight: 'bold'}}> 47%</ThemedText>
                </ThemedView>
              );
            }}
          />
          <ThemedView style={{flexDirection:'column',marginLeft:10,alignItems:'center'}}>
            <ThemedText type='subtitle' style={{color: Colors.light.text, fontWeight: 'bold'}}>Avg Blood Glucose</ThemedText>
            <ThemedText type='title' style={{color: Colors.light.text, marginVertical: 10, fontWeight: 'bold'}}>108 mmol/l</ThemedText>
            <ThemedText type='default' style={{color: Colors.light.text, fontWeight: 'bold'}}>normal</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
  )
};

const BarChartComponent = () => {
  const barData = [
    {
      value: 40,
      label: 'Jan',
      spacing: 20,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: Colors.tertiary,
    },
    {
      value: 50,
      label: 'Feb',
      spacing: 20,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: Colors.primary,
    },
    {
      value: 75,
      label: 'Mar',
      spacing: 20,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: Colors.primary,
    },
    {
      value: 30,
      label: 'Apr',
      spacing: 20,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: Colors.tertiary,
    },
    {
      value: 60,
      label: 'May',
      spacing: 20,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: Colors.primary,
    },
    {
      value: 65,
      label: 'Jun',
      spacing: 20,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: Colors.primary,
    },
  ];

  const renderTitle = () => {
      return(
        <ThemedView style={{marginVertical: 30}}>
          <ThemedView style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <GLUCOSE_ICON size={24}/>
            <ThemedText type='title' style={{ color: Colors.light.text, fontSize: 20, marginLeft:10,fontWeight: 'bold', textAlign: 'center'}}>Glucose(mmol/L)</ThemedText>
          </ThemedView>
          <ThemedView style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20,}}>
            <ThemedView style={{flexDirection: 'row', alignItems: 'center'}}>
              <ThemedView style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: Colors.secondaryBase, marginRight: 8}}/>
              <ThemedText style={{ color: Colors.light.text}}>
                  Low
              </ThemedText>
            </ThemedView>
            
            <ThemedView style={{flexDirection: 'row', alignItems: 'center'}}>
              <ThemedView style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: Colors.tertiary, marginRight: 8}}/>
              <ThemedText style={{ color: Colors.light.text}}>
                  Normal
              </ThemedText>
            </ThemedView>

            <ThemedView style={{flexDirection: 'row', alignItems: 'center'}}>
              <ThemedView style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: Colors.primary, marginRight: 8}}/>
              <ThemedText style={{ color: Colors.light.text}}>
                  High
              </ThemedText>
            </ThemedView>

          </ThemedView>
        </ThemedView>
      )
  }

return (
    <ThemedView style={{ backgroundColor: Colors.base, paddingBottom: 40, borderRadius: 10,marginVertical:10}}>
      {renderTitle()}
      <BarChart
        data={barData}
        barWidth={20}
        spacing={20}
        roundedTop
        roundedBottom
        hideRules
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisTextStyle={{color: 'gray'}}
        noOfSections={3}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  header:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingTop: 30,
    marginVertical: 5,
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
    padding: 20
  }
});

