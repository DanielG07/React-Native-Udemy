import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';

import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const SettingsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SettingScreen'
        component={ SettingsScreen }
      />
    </Stack.Navigator>
  )
}

export const MenuLateral = () => {

    const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator
        screenOptions={{
            drawerType: (width >= 768) ? 'permanent' : 'front',
            headerShown: false,
            drawerPosition:'left'
        }}
        drawerContent={ (props) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen name="SettingScreen" component={ SettingsStackScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: "https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif"
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.menuContainer}>

        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => {navigation.navigate('StackNavigator')}}
        >
          <Text style={styles.menuItemText}>Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => {navigation.navigate('SettingScreen')}}
        >
          <Text style={styles.menuItemText}>Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>  
  )
}