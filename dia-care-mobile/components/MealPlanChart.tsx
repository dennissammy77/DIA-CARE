import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const data=[
    {value: 54, color: '#FF5C00',shiftX: -3, shiftY: 1},
    {value: 40, color: '#3DB649',shiftX: -6, shiftY: 0},
    {value: 20, color: '#A6816C',shiftX: -4, shiftY: -1},
];

export default function ChartComponent() {
    return (
        <View>
            <PieChart 
                data = {data} 
                donut
                textColor="black"
                radius={80}
                innerRadius={60}
                
                centerLabelComponent={() => {
                   return (
                        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize: 18}}>Daily Nutrients</Text>
                            <Text style={{fontSize: 14}}>intake</Text>
                            <Text style={{fontSize: 12}}>789g</Text>
                        </View>
                   )
                }}
            />
        </View>
    )
}