import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> {}

export const HomeScreent = ({ navigation, route }: Props) => {

    

    return (
        <View>
            <Text>HomeScreen</Text>
            <Button
                title='Navegación'
                onPress={() => navigation.navigate('DetailScreen')}
            />
        </View>
    )
}
