import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import Animated, {
  useAnimatedRef,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

interface Props {
  children: JSX.Element[] | JSX.Element,
  backgroundColor: string | null
}
export default function ParallaxScrollView({
  children,
  backgroundColor,
  ...rest
}: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  return (
    <ThemedView style={{flex:1,backgroundColor: backgroundColor || Colors.base}} {...rest}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    gap: 16,
    overflow: 'hidden',
  },
});
