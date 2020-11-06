import { type } from 'os'
import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, ...restoProps}) => (
<Container type="button" {...restoProps}>
    {children}
</Container>
)

export default Button