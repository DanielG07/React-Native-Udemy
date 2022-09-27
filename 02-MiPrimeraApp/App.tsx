import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { PositionScreen } from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HolaMundoScreen/> */}
      {/* <CounterScreen/> */}
      {/* <BoxObjectModelScreen/> */}
      {/* <DimensionesScreen/> */}
      <PositionScreen/> 
    </SafeAreaView>
  )
}

export default App;