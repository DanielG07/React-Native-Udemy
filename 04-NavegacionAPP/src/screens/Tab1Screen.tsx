import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { colors, styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets()

    useEffect(() => {
        console.log("Tab1Screen effect")
    }, [])
    

    return (
        <View
            style={{
                ...styles.globalMargin,
                marginTop: top
            }}
        >
            <Text style={styles.title}>Iconos</Text>
            <TouchableIcon iconName='airplane-outline'/>
            <TouchableIcon iconName='archive-outline'/>
            <TouchableIcon iconName='beer-outline'/>
            <TouchableIcon iconName='car-sport-outline'/>
            <TouchableIcon iconName='toggle-outline'/>
        </View>
    )
}
