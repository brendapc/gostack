import React from 'react'
import { render } from 'react-dom'

import Header from './components/Header'

export default function App(){
    const projects = ['Desenvolvimento Web', 'Desenvolvimento Mobile', 'Front-end', 'Back-end']

    return (
        <>
            <Header title="projects"/>

            <ul>
            {projects.map(project => <li key={project}> {project} </li>)}
            </ul>
        </>
    )
}

