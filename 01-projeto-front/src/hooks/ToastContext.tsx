import React, { createContext, useCallback, useContext } from 'react'
import  ToastContainer  from '../components/ToastContainer'

interface ToastContextData {
    addToast(): void;
    removeToast(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

const ToastProvider: React.FC = ({ children }) => {
    const addToast = useCallback(()=>{
        console.log('add toast')
    }, [])
    const removeToast = useCallback(()=>{
        console.log('remove toast')
    },[])
    return (
        <ToastContext.Provider value={{ addToast, removeToast}}>
            { children }
            <ToastContainer />
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