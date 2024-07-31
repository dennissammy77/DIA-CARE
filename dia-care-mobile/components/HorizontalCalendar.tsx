import { Colors } from '@/constants/Colors';
import React, { useMemo } from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.18;
const ITEM_HEIGHT = 70;
const ITEM_OFFSET = ITEM_WIDTH + 18;

interface Props {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

function dateSubtractDays(date: Date, days: number) {
  var result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}

function getDayString(date: Date): string {
  return date.toString().split(' ')[0];
}

function isSameDay(date1: Date, date2: Date): boolean {
  return date1.getDate() === date2.getDate();
}

function isToday(date: Date): boolean {
  return new Date().getDate() == date.getDate();
}

function generateHorizontalCalendarDates(days: number): Date[] {
  const today = new Date();
  let result = [];
  for (let i = 0; i < days; i++) {
    result[i] = dateSubtractDays(today, i);
  }

  return result.reverse();
}

export default function HorizontalCalendar({
  selectedDate,
  setSelectedDate,
}: Props) {
  const dates: Date[] = useMemo(() => {
    return generateHorizontalCalendarDates(14);
  }, []);

  const onDatePress = (date: Date) => {
    setSelectedDate(date);
  };

  const renderItem = ({ item, index }: { item: Date; index: number }) => {
    const dayNumber = item.getDate();
    const dayString = getDayString(item);
    const isActive = isSameDay(selectedDate, item);
    return (
      <Pressable
        onPress={() => onDatePress(item)}
        style={[styles.item, isActive && { backgroundColor: Colors.base }]}>
        <Text style={[styles.dayStyle, isActive && styles.activeText]}>
          {isToday(item) ? 'today' : dayString}
        </Text>
        <Text style={[styles.dateOutput, isActive && styles.activeText]}>
          {dayNumber}
        </Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={dates}
      renderItem={renderItem}
      keyExtractor={(item) => item.toDateString()}
      horizontal={true}
      contentContainerStyle={[
        { marginVertical: 5 },
      ]}
      showsHorizontalScrollIndicator={false}
      initialScrollIndex={dates.length - 8}
      getItemLayout={(_, index) => ({
        length: ITEM_WIDTH,
        offset: ITEM_OFFSET * index,
        index,
      })}
    />
  );
}

const styles = StyleSheet.create({
    dateOutput: {
        color: Colors.base,
        fontSize: 24,
        fontWeight:'600',
    },
    dayStyle: {
        color: Colors.base,
        textTransform: 'capitalize',
    },
      activeText: {
        color: Colors.secondary,
      },
    item: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(49,49,49,0.1)",
        marginHorizontal: 2,
        borderRadius: 10,
        shadowColor: Colors.secondary,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
});
