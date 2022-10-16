import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumScreen } from '../screens/AlbumScreen.';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top }= useSafeAreaInsets()

  return (
    <Tab.Navigator
      style={{
        backgroundColor:'white',
        paddingTop: top
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarIndicatorStyle:{
          backgroundColor: colors.primary
        },
        tabBarStyle: {
          borderTopColor: colors.primary, 
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarIcon: ({color, focused}) => {

          let iconName: string
          switch(route.name){
              case 'Chat':
                  iconName = 'chatbox-outline'
              break

              case 'Contact':
                  iconName = 'people-outline'
              break

              case 'Album':
                  iconName = 'images-outline'
              break
          }

          return <Icon name={iconName} size={25} color={color} />
        },
        tabBarShowIcon: true
      })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
}