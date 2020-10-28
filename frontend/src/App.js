import React from 'react'
import { render } from 'react-dom'

import Header from './components/Header'

export default function App(){
    return (
        <>
            <Header title="home">
                <ul>
                    <li>about us</li>
                    <li>contact</li>
                    <li>help</li>
                </ul>
            </Header>
            <Header title="projects"/>
        </>
    )
}

