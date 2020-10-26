const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({msg: 'hello world'})
})

app.get('/project', (req, res)=>{
    res.json([
        'projeto1',
        'projeto2'
    ])
})

app.post('/project', (req, res)=>{
    res.json([
        'projeto1',
        'projeto2',
        'projeto3',
    ])
})

app.put('/project/:id', (req, res)=>{
    res.json({
        info: "update"
    })
})

app.delete('/project/:id', (req, res)=>{
    res.json({
        info: "delete"
    })
})

app.listen(3333, ()=>{
    console.log('✨ backend executando ✨')
})