import React, { useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core' 
import * as Yup from 'yup'

import logoImg from '../../assets/logo-name.svg'
import getValidationErrors from '../../utils/getValidationErrors'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { useAuth } from '../../hooks/AuthContext'
import { useToast } from '../../hooks/ToastContext'

import { Container, Content, Background, AnimationContainer } from './styles'

interface SignInForData {
    email: string;
    password: string
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const { signIn } = useAuth()
    const { addToast } = useToast()

    const handleSubmit = useCallback(async (data: SignInForData) => {
        try{
            formRef.current?.setErrors({})
            const schema = Yup.object().shape({
                email: Yup.string().required('email obrigatório').email('email tem que ser válido'),
                password: Yup.string().required('senha obrigatória')
            })
            await schema.validate(data, {
                abortEarly: false
            })

            await signIn({
                email: data.email,
                password: data.password
            })
        }catch(err){
            if(err instanceof Yup.ValidationError){
                const errors =  getValidationErrors(err)
            
                formRef.current?.setErrors(errors)  
            }
            // disparar toast

            addToast({
                type: 'error',
                title: 'erro na autenticação',
                description: 'ocorreu um erro na autenticação'
            })   
        }
    }, [signIn, addToast])
     
    return (

        <Container>
            <Content>
                <AnimationContainer>

                
                    <img src={logoImg} alt="logo go barber" />
                    <Form ref={formRef} onSubmit={ handleSubmit }>
                        <h1>Faça seu login</h1>
                        <Input name="email" icon={FiMail} placeholder="E-mail" />
                        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                        <Button type="submit">Entrar</Button>

                        <a href="/"> Esqueci minha senha</a>
                        
                    </Form>
                    <Link to="/signup">
                        <FiLogIn />
                        Criar conta
                    </Link>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    )
}
export default SignIn