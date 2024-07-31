import { ImageBackground, Image, StyleSheet, Platform, View, useColorScheme } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ARROW_DOWN_ICON, ARROW_RIGHT_ICON, ARROW_UP_ICON, DONE_ICON, DOT_ICON, GLUCOSE_ICON, HEARTBEAT_ICON, NOTIFICATION_ICON } from '@/constants/Icons';
import { Colors } from '@/constants/Colors';
import { HelloWave } from '@/components/HelloWave';
import { Link } from 'expo-router';
import { useState } from 'react';
import HorizontalCalendar from '@/components/HorizontalCalendar';

const image = { uri: "https://firebasestorage.googleapis.com/v0/b/studyhacks-file-upload.appspot.com/o/WhatsApp%20Image%202024-07-20%20at%2011.22.19_f7f4ffc0.jpg?alt=media&token=05a8f2cb-e04f-4cb5-a9d3-0943b554b700" };


interface Props {
  colorScheme: string | null,
  backgroundColor: string | null,
}
export default function Home(props: Props ) {
  const colorScheme = useColorScheme();
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <ParallaxScrollView backgroundColor={colorScheme === 'light' ? Colors.base : Colors.dark.background}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.titleContainer}>
          <ThemedText>Hi, Leah</ThemedText>
          <ThemedView style={{backgroundColor:"rgba(49,49,49,0.1)", padding:2, borderRadius:4}}>
            <NOTIFICATION_ICON style={{color:Colors.base}}/>
          </ThemedView>
        </View>
        <ThemedView style={{marginVertical:16}}>
          <ThemedText type="title">Welcome Back !</ThemedText>
        </ThemedView>
        <ThemedView>
          <HorizontalCalendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </ThemedView>
      </ImageBackground>
      <ThemedView style={styles.cardContainer}>

        <ThemedView style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <ThemedView style={{flexDirection:'row',alignItems:'center'}}>
            <GLUCOSE_ICON size={16} style={{color:Colors.primary}}/>
            <ThemedText style={{fontWeight:'light',color:Colors.primary,fontSize:14, marginLeft:10}}>Glucose</ThemedText>
          </ThemedView>
          <ThemedText style={{fontSize:12}}>18:20 pm</ThemedText>
        </ThemedView>

        <ThemedView style={{flexDirection:'row',alignItems:'center', marginVertical:10}}>
          <ThemedView style={{flex:1,flexDirection:'column'}}>
            <ThemedText style={{fontWeight:'bold'}} type='title'>5.9 mmol/l</ThemedText>
            <ThemedText style={{fontWeight:'light'}} type='small'>You are on good state!</ThemedText>
          </ThemedView>
          <Link href={'/glucose'}>
            <ARROW_RIGHT_ICON size={16}/>
          </Link>
        </ThemedView>
        
        <ThemedView style={{flex:1,flexDirection:'row',alignItems:'center',marginVertical:5,justifyContent:'space-between'}}>
          <ThemedView style={{flexDirection:'row',alignItems:'center'}}>
            <ARROW_UP_ICON size={16}/>
            <ThemedView style={{flexDirection:'column',marginLeft:4}}>
              <ThemedText style={{fontWeight:'bold'}} type='small'>High</ThemedText>
              <ThemedText style={{fontWeight:'light'}} type='small'>8.5 mmol/l</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={{flexDirection:'row',alignItems:'center'}}>
            <DONE_ICON size={16}/>
            <ThemedView style={{flexDirection:'column',marginLeft:4}}>
              <ThemedText style={{fontWeight:'bold'}} type='small'>Normal</ThemedText>
              <ThemedText style={{fontWeight:'light'}} type='small'>5.5 mmol/l</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={{flexDirection:'row',alignItems:'center'}}>
            <ARROW_DOWN_ICON size={16}/>
            <ThemedView style={{flexDirection:'column',marginLeft:4}}>
              <ThemedText style={{fontWeight:'bold'}} type='small'>Low</ThemedText>
              <ThemedText style={{fontWeight:'light'}} type='small'>3.5 mmol/l</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
      
      <ThemedView style={styles.cardContainer}>
          
          <ThemedView style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <ThemedView style={{flexDirection:'row',alignItems:'center'}}>
              <HEARTBEAT_ICON size={16} style={{color:Colors.primary}}/>
              <ThemedText style={{fontWeight:'light',color:Colors.primary,fontSize:14, marginLeft:10}}>Heart rate</ThemedText>
            </ThemedView>
            <ThemedText style={{fontSize:12}}>20:20 pm</ThemedText>
          </ThemedView>

          <ThemedView style={{flexDirection:'row',alignItems:'center', marginVertical:10}}>
            <ThemedView style={{flex:1,flexDirection:'column'}}>
              <ThemedText style={{fontWeight:'bold'}} type='title'>105 bpm</ThemedText>
              <ThemedText style={{fontWeight:'light'}} type='small'>Normal heart rate!</ThemedText>
            </ThemedView>
            <Link href={'/glucose'}>
              <ARROW_RIGHT_ICON size={16}/>
            </Link>
          </ThemedView>
      </ThemedView>
      {/**
       * 
 
 
       <ThemedView>
         <ThemedText type="title" style={{color:colorScheme === 'light'? '#000' : Colors.base, marginVertical: 10, marginHorizontal:10}}>Today meals</ThemedText>
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
               </ThemedView>
             </ThemedView>
           );
         })}
       </ThemedView>
       */}

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  welcomeContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems:'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    height: 250,
    width: 'auto',
    paddingHorizontal: 20,
    paddingTop: 36,
    overflow:'hidden',
    borderRadius: 20,
  },
  cardContainer:{
    backgroundColor: Colors.base,
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: Colors.tertiary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-start',
    backgroundColor: Colors.secondaryBase,
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