import React, { useCallback, useRef, useContext } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core' 
import * as Yup from 'yup'

import logoImg from '../../assets/logo-name.svg'
import getValidationErrors from '../../utils/getValidationErrors'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { useAuth } from '../../hooks/AuthContext'

import { Container, Content, Background } from './styles'

interface SignInForData {
    email: string;
    password: string
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const { signIn, user } = useAuth()
    console.log(user)

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

            signIn({
                email: data.email,
                password: data.password
            })
        }catch(err){
            if(err instanceof Yup.ValidationError){
                const errors =  getValidationErrors(err)
            
                formRef.current?.setErrors(errors)  
            }
            // disparar toast
        }
    }, [signIn])
     
    return (

        <Container>
            <Content>
                <img src={logoImg} alt="logo go barber" />
                <Form ref={formRef} onSubmit={ handleSubmit }>
                    <h1>Faça seu logon</h1>
                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                    <Button type="submit">Entrar</Button>

                    <a href="/"> Esqueci minha senha</a>
                    
                </Form>
                <a href="/">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content>
            <Background />
        </Container>
    )
}
export default SignIn