import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {

}

export const Pagina1Screen = ( {navigation}: Props) => {

    useEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
            <Button
                title='MENU'
                onPress={() => navigation.toggleDrawer()}
            />
        )
      })
    }, [])
    

    return (
        <View
            style={styles.globalMargin}
        >
            <Text
                style={styles.title}
            >Pagina 1 Screen</Text>

            <Button
                title='Ir pagina 2'
                onPress={() => navigation.navigate('Pagina2Screen')}
                />

            <Text
                style={{
                    marginVertical: 16,
                    fontSize: 20
                }}
            >
                Navegar con argumentos
            </Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity 
                    style={{ 
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Daniel'
                    })}
                    >
                    <Text style={ styles.botonGrandeTexto }>Daniel</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{ 
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Maria'
                    })}
                    >
                    <Text style={ styles.botonGrandeTexto }>Maria</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
