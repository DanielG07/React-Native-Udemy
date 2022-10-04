import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator
        screenOptions={{
            drawerType: (width >= 768) ? 'permanent' : 'front',
            headerShown: false,
            drawerPosition:'left'
        }}
    >
      <Drawer.Screen name="Home" component={ StackNavigator } />
      <Drawer.Screen name="Settings" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}