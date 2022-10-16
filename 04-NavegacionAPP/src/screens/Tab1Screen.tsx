import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { colors, styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
            <Icon name="airplane-outline" size={50} color={colors.primary} />
            <Icon name="archive-outline" size={50} color={colors.primary} />
            <Icon name="beer-outline" size={50} color={colors.primary} />
            <Icon name="car-sport-outline" size={50} color={colors.primary} />
            <Icon name="toggle-outline" size={50} color={colors.primary} />
        </View>
    )
}
