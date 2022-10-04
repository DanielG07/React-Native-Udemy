import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{

}

export const Pagina3Screen = ({navigation}: Props) => {
    return (
        <View>
            <Text
                style={styles.title}
            > Pagina 3 Screen </Text>
            <Button
                title='Ir pagina 2'
                onPress={() => navigation.pop()}
                />

            <Button
                title='Ir pagina 1'
                onPress={() => navigation.popToTop()}
                />
        </View>
    )
}
