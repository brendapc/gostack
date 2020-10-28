import React, { useState } from 'react'

import './App.css'
import image from '../assets/image.jpg'
import Header from './components/Header'

export default function App(){
    const [ projects, setProjects ] = useState(['Desenvolvimento Web', 'Desenvolvimento Mobile', 'Front-end', 'Back-end'])
    
    function handleAddProject(){
        setProjects([...projects, `novo projeto ${Date.now()}`])
        console.log(projects)
    }

    return (
        <>
            <Header title="projects"/>

            <ul>
            {projects.map(project => <li key={project}> {project} </li>)}
            </ul>

            <button type="button" onClick={ handleAddProject } >Adicionar Projeto</button>
            <div>
                <img width={600} src={ image } alt=""/>
            </div>
            
        </>
    )
}

