import { useState, useRef } from 'react';

enum Operadores {
    SUMA,
    RESTA,
    MULTIPLICACION,
    DIVICION
}

export const useCalculadora = () => {

    const [numero, setNumero] = useState("0")
    const [numeroAnterior, setNumeroAnterior] = useState("0")
    const operacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0')
        setNumeroAnterior('0')
    }

    const armarNumero = (numeroTexto: string) => {
        console.log(numero)
        console.log(numeroTexto)
        if( numero.includes('.') && numeroTexto === '.') return

        if( numero.startsWith('0') || numero.startsWith('-0') ) {
            if (numeroTexto === '.') {
                setNumero( numero + numeroTexto )
            } else if( numeroTexto === '0' && numero.includes('.')) {
                setNumero( numero + numeroTexto )
            } else if( numeroTexto !== '0' && !numero.includes('.')) {
                setNumero( numeroTexto )
            } else if( numeroTexto === '0' && !numero.includes('.')) {
                setNumero( numero )
            } else {
                setNumero( numero + numeroTexto )
            }
        } else {
            setNumero(numero + numeroTexto)
        }
    }

    const signo = () => {
        if ( numero.includes('-') ){
            setNumero( numero.replace('-', ''))
        } else {
            setNumero('-' + numero)
        }
    }

    const del = () => {
        if (!numero.includes('-') && numero.length === 1) {
            setNumero( '0' )
        } else if (numero.includes('-') && numero.length === 1) {
            setNumero( '0' )
        } else {
            setNumero( numero.slice(0, numero.length-1) )
        }
    }

    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumero(numero.slice(0,-1))
        } else {
            setNumeroAnterior( numero )
        }
        
        setNumero( '0' )
    }

    const btnDividir = () => {
        cambiarNumPorAnterior()
        operacion.current = Operadores.DIVICION
    }

    const btnMultiplicar = () => {
        cambiarNumPorAnterior()
        operacion.current = Operadores.MULTIPLICACION
    }

    const btnRestar = () => {
        cambiarNumPorAnterior()
        operacion.current = Operadores.RESTA
    }

    const btnSumar = () => {
        cambiarNumPorAnterior()
        operacion.current = Operadores.SUMA
    }

    const calcular = () => {
        
        const num1 = Number ( numeroAnterior )
        const num2 = Number ( numero )

        switch(operacion.current){
            case Operadores.SUMA:
                setNumero(`${num1 + num2}`)
                setNumeroAnterior('0')
                break

            case Operadores.RESTA:
                setNumero(`${num1 - num2}`)
                setNumeroAnterior('0')
                break

            case Operadores.MULTIPLICACION:
                setNumero(`${num1 * num2}`)
                setNumeroAnterior('0')
                break

            case Operadores.DIVICION:
                if(num2 !== 0){
                    setNumero(`${num1 / num2}`)
                    setNumeroAnterior('0')
                }
                break

            default:
                break
        }
    }

    return ({
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
    })
}
