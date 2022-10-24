import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreent } from '../screens/HomeScreent';
import { DetailScreen } from '../screens/DetailScreen';

export type RootStackParams = {
    HomeScreen: undefined,
    DetailScreen: undefined
  }

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreent} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}