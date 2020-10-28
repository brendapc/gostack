import React, { useEffect, useState } from 'react'
import api from './services/api'
import './App.css'
import image from '../assets/image.jpg'
import Header from './components/Header'

export default function App(){
    const [ projects, setProjects ] = useState([])
    
    useEffect(()=>{
        api.get('project').then( response =>{
            setProjects(response.data)
        })
    }, [])

    return (
        <>
            <Header title="projects"/>

            <ul>
            {projects.map(project => <li key={project.id}> {project.title} </li>)}
            </ul>

            <button type="button">adicionar Projeto</button>
            <div>
                <img width={600} src={ image } alt=""/>
            </div>
            
        </>
    )
}

