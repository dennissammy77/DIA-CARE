/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
const PRIMARY_COLOR = '#F5B0B0';
const SECONDARY_COLOR = '#313131';
const TERTIARY_COLOR = '#D7DDE1';
const BASE_COLOR = '#FFFFFF';
const SECONDARY_BASE_COLOR = '#FFF6F6';

export const Colors = {
  light: {
    text: '#11181C',
    background: SECONDARY_BASE_COLOR,
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  primary: PRIMARY_COLOR,
  tertiary: TERTIARY_COLOR,
  secondary: SECONDARY_COLOR,
  base: BASE_COLOR,
  secondaryBase: SECONDARY_BASE_COLOR,
  error: '#FF0000',
  warning: '#FFA500',
  success: '#008000',
  notification: '#FF5C00'
};
