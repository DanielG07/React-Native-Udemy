import { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { useCalculadora } from '../hooks/useCalculadora'
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {

    const {
        numero,
        numeroAnterior,
        limpiar,
        signo,
        del,
        armarNumero,
        btnSumar,
        btnRestar,
        btnMultiplicar,
        btnDividir,
        calcular
    } = useCalculadora()

    return (
        
        <View style={ styles.calculadoraContainer }>

            {
                (numeroAnterior !== '0') && (<Text
                    style={ styles.acarreo }
                >{ numeroAnterior }</Text>)
            }

            <Text
                style={ styles.resultado }
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            >{ numero }</Text>

            <View style={ styles.fila }>
                <BotonCalc
                    texto={'C'}
                    color='#989898'
                    accion={limpiar}
                />
                <BotonCalc
                    texto={'+/-'}
                    color='#989898'
                    accion={signo}
                />
                <BotonCalc
                    texto={'del'}
                    color='#989898'
                    accion={del}
                />
                <BotonCalc
                    texto={'/'}
                    color='#FF9427'
                    accion={btnDividir}
                />
            </View>

            <View style={ styles.fila }>
                <BotonCalc
                    texto={'7'}
                    accion={armarNumero}
                />
                <BotonCalc
                    texto={'8'}
                    accion={armarNumero}
                />
                <BotonCalc
                    texto={'9'}
                    accion={armarNumero}
                />
                <BotonCalc
                    texto={'x'}
                    color='#FF9427'
                    accion={btnMultiplicar}
                />
            </View>

            <View style={ styles.fila }>
                <BotonCalc
                    texto={'4'}
                    accion={armarNumero}
                />
                <BotonCalc
                    texto={'5'}
                    accion={armarNumero}
                />
                <BotonCalc
                    texto={'6'}
                    accion={armarNumero}
                />
                <BotonCalc
                    texto={'-'}
                    color='#FF9427'
                    accion={btnRestar}
                />
            </View>

            <View style={ styles.fila }>
                <BotonCalc
                    texto={'1'}
                    accion={armarNumero}
                />
                <BotonCalc
                    texto={'2'}
                    accion={armarNumero}
                />
                <BotonCalc
                    texto={'3'}
                    accion={armarNumero}
                />
                <BotonCalc
                    texto={'+'}
                    color='#FF9427'
                    accion={btnSumar}
                />
            </View>

            <View style={ styles.fila }>
                <BotonCalc
                    texto={'0'}
                    ancho={true}
                    accion={armarNumero}
                />
                <BotonCalc
                    texto={'.'}
                    accion={armarNumero}
                />
                <BotonCalc
                    texto={'='}
                    color='#FF9427'
                    accion={calcular}
                />
            </View>

        </View>
    )
}
