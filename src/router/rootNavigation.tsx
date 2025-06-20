import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { SCREENS } from '../utils/routes';
import User from '../screens/user';
import UserDetail from '../screens/userDetail';
import { Colors } from '../theme/colors';

const { USER, USERDETAIL } = SCREENS;
const Stack = createNativeStackNavigator();
const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.ICEBLUE },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name={USER} component={User} />
      <Stack.Screen name={USERDETAIL} component={UserDetail} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default RootNavigation;
