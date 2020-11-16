import React from 'react'
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi'
import { ToastMessage, useToast } from '../../hooks/ToastContext'
import { Container, Toast } from './styles'

interface ToastContainerProps {
    messages: ToastMessage[];
}
const icons = {
    info: <FiInfo size={24} />,
    error: <FiAlertCircle size={24} />,
    success: <FiCheckCircle size={24} />
}
const ToastContainer: React.FC<ToastContainerProps> = ({messages}) =>{
    const { removeToast } = useToast()

    return (
        <Container>
            {messages.map(message => (
                <Toast key={message.id} type={message.type} hasDescription={!!message.description}>
                   { icons[message.type || 'info'] }

                    <div>
                        <strong>{message.title} </strong>
                        {message.description && <p>{message.description}</p>}
                    
                    </div>

                    <button onClick={() => removeToast(message.id)} type='button'>
                        <FiXCircle size={18} />
                    </button>
                </Toast>
            ))}
            
        </Container>
    )
}

export default ToastContainer