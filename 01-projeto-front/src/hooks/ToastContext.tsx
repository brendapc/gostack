import React, { createContext, useCallback, useContext, useState } from 'react'
import { uuid } from 'uuidv4'
import  ToastContainer  from '../components/ToastContainer'

export interface ToastMessage {
    id: string;
    type?: 'error' | 'success' | 'info';
    title: string;
    description?: string;
}

interface ToastContextData {
    addToast(message: Omit<ToastMessage, 'id'>): void;
    removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

const ToastProvider: React.FC = ({ children }) => {

    const [messages, setMessages] = useState<ToastMessage[]>([]) 

    const addToast = useCallback(({type, title, description}: Omit<ToastMessage, 'id'>)=>{
        const id = uuid()

        const toast = {
            id,
            type,
            title,
            description
        }

        setMessages((oldMessages) => [...oldMessages, toast]) //pega o valor ja exitente e adiciona o toat
    }, [])
    const removeToast = useCallback((id: string)=>{
       setMessages((oldValue)=> oldValue.filter((message)=> message.id !== id))//pega o valor existente dentro de messages e retorna só o que for diferente do id do à ser removido
    },[])
    return (
        <ToastContext.Provider value={{ addToast, removeToast}}>
            { children }
            <ToastContainer messages={messages} />
        </ToastContext.Provider>
    )
}

function useToast(): ToastContextData {
    const context = useContext(ToastContext)

    if(!context){
        throw new Error('useToast mus be used within a ToastProvider')
    }
    return context
}

export { ToastProvider, useToast }