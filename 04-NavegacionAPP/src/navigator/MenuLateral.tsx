import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, Text, useWindowDimensions, View } from 'react-native';

import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { styles } from '../theme/appTheme';

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
      <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen name="SettingScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = (props: DrawerContentComponentProps) => {
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

    </DrawerContentScrollView>  
  )
}