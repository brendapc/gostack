import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react'
import { IconBaseProps } from 'react-icons'
import { FiAlertCircle } from 'react-icons/fi'
import { useField } from '@unform/core'

import { Container, Error } from './styles'
import Tooltip from '../Tooltip' 

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ...restoProps}) => {
    const [ isFocused, setIsFocused ] = useState(false)
    const [ isFilled, setIsFilled ] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)
    const { fieldName, defaultValue, error, registerField } = useField(name)

    const handleFocus = useCallback(()=>{
        setIsFocused(true)
    }, [ ])

    const handleBlur = useCallback(() => {
        setIsFocused(false)
        /* if(inputRef.current?.value){
            setIsFilled(true)
        }else{
            setIsFilled(false)
        }  reduzido abaixo: */ 
    
        setIsFilled(!!inputRef.current?.value)
    }, [])

    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [ fieldName, registerField ])

    return (
    <Container isErroed={!!error}  isFilled={isFilled} isFocused={isFocused}>
        { Icon && <Icon size={20} /> }
        <input 
            onFocus={ handleFocus }
            onBlur={ handleBlur }
            ref={inputRef} 
            {...restoProps} 
        />  
        {error && (
            <Error title={error}>
                <FiAlertCircle color="#c63030" size={20} />
            </Error>
        )}
    </Container>   
    )
}
export default Input

 