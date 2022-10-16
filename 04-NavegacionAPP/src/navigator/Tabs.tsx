import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
    return Platform.OS === 'ios'
    ? <TabsIOS/>
    : <TabsAndroid/>
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
        labeled={false}
        sceneAnimationEnabled={ true }
        barStyle={{
            backgroundColor: colors.primary
        }}
        screenOptions={({route}) => ({
            tabBarActiveTintColor: colors.primary,
            tabBarStyle: {
              borderTopColor: colors.primary, 
              borderTopWidth: 0,
              elevation: 0,
            },
            tabBarLabelStyle: {
                fontSize: 15
            },
            tabBarIcon: ({color, focused}) => {

              let iconName: string
              switch(route.name){
                  case 'Tab1Screen':
                      iconName = 'apps-outline'
                  break

                  case 'TopTabNavigator':
                      iconName = 'calendar-outline'
                  break

                  case 'StackNavigator':
                      iconName = 'file-tray-stacked-outline'
                  break

                  default :
                    iconName = 'default'
              }

              return <Icon name={iconName} size={25} color={color} />
            }
          })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={ Tab1Screen } />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title: 'Tab 2' }} component={ TopTabNavigator } />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}


const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarStyle: {
            borderTopColor: colors.primary, 
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarLabelStyle: {
              fontSize: 15
          },
          tabBarIcon: ({color, focused, size}) => {

              let iconName: string
              switch(route.name){
                  case 'Tab1Screen':
                      iconName = 'apps-outline'
                  break

                  case 'TopTabNavigator':
                      iconName = 'calendar-outline'
                  break

                  case 'StackNavigator':
                      iconName = 'file-tray-stacked-outline'
                  break
                  
                  default :
                      iconName = 'default'
              }

              return <Icon name={iconName} size={25} color={color} />
          }
          })}

    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab 1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text>}} component={ Tab1Screen } /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={ Tab1Screen } />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{ title: 'Tab 2' }} component={ TopTabNavigator } />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavigator } />
    </BottomTabIOS .Navigator>
  );
}