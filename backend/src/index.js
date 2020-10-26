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
    
})

app.listen(3333, ()=>{
    console.log('✨ backend executando ✨')
})