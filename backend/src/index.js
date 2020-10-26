const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.json({msg: 'ola'})
})

app.listen(3333)