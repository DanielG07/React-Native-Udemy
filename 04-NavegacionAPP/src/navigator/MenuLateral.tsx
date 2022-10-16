import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';

import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

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
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingScreen" component={ SettingsScreen } />
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
          style={{
            ...styles.menuItem,
            flexDirection: 'row'
          }}
          onPress={() => {navigation.navigate('Tabs')}}
        >
          <Icon name={'alarm'} size={25} />
          <Text style={{
            ...styles.menuItemText,
            marginLeft: 10
            }}>Tabs</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{
            ...styles.menuItem,
            flexDirection: 'row'
          }}
          onPress={() => {navigation.navigate('SettingScreen')}}
        >
          <Icon name={'settings-outline'} size={25}/>
          <Text style={{
            ...styles.menuItemText,
            marginLeft: 10
            }}>Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>  
  )
}