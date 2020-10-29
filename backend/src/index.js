const express = require('express')
const cors = require('cors')
const { uuid, isUuid } = require('uuidv4')

const app = express()
app.use(cors())
app.use(express.json())

const projects = []

function logRequests (req, res, next){
    const { method, url }	= req
    const logLabel = `o metodo é ${method} e a url é ${url}`

    next()
}

function validateId(req, res, next){
    const { id } = req.params

    if(!isUuid(id)){
        return res.status(400).json({error: 'invalid id'})
    }

    next()
}

app.use(logRequests);

app.get('/', (req, res) => {
    res.json({msg: 'hello world'})
})

app.get('/project', (req, res)=>{
    const { title } = req.query;
    const result = title 
        ? projects.filter(project => project.title.includes(title)) 
        : projects;

    res.json(result)
}) 

app.post('/project', (req, res)=>{
    const { title, owner } = req.body
    const project = { id: uuid() , title, owner }

    projects.push(project)
    res.json(project)
})

app.put('/project/:id', validateId, (req, res)=>{
    const { id } = req.params;
    const { title, owner } = req.body

    const projectIndex = projects.findIndex(project => project.id === id )

    if(projectIndex < 0){
        res.status(404).json({error: 'project not found'})
    }

    const project = {
        id,
        title,
        owner
    }
    projects[projectIndex] = project

    res.json(project)
})

app.delete('/project/:id', (req, res)=>{
    const { id } = req.params;
    const projectIndex = projects.findIndex(project => project.id === id );

    if(projectIndex < 0){
        req.status.json({error: 'project not found'});
    }

    projects.splice(projectIndex, 1);
    
    res.status(204).send()
})

app.listen(3333, ()=>{
    console.log('✨ backend executando ✨')
})

