import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {

}

export const PersonaScreen = ({navigation, route}: Props) => {

    useEffect(() => {
        navigation.setOptions({
            title: params!.nombre
        })
    
    }, [])
    

    const params = route.params

    console.log(JSON.stringify(params))

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}
