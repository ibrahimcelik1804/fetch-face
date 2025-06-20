import { SafeAreaView, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

export const defaultStyle = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.ICEBLUE,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
