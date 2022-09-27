import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';

const App = () => {
  return (
    <SafeAreaView>
      {/* <HolaMundoScreen/> */}
      {/* <CounterScreen/> */}
      {/* <BoxObjectModelScreen/> */}
      <DimensionesScreen/>
    </SafeAreaView>
  )
}

export default App;