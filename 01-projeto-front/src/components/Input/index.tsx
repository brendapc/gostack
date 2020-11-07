import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react'
import { IconBaseProps } from 'react-icons'
import { useField } from '@unform/core'
import { Container } from './styles'

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
    <Container isFilled={isFilled} isFocused={isFocused}>
        { Icon && <Icon size={20} /> }
        <input 
            onFocus={ handleFocus }
            onBlur={ handleBlur }
            ref={inputRef} 
            {...restoProps} 
        />  
        {error}
    </Container>   
    )
}
export default Input

 