const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.send("Hola mundo")
})
app.get('/suma/:a/:b',(req, res)=>{
    let a = parseInt(req.param('a'))
    let b = parseInt(req.param('b'))
    res.send("resultado " + (a + b))
})

app.listen(process.env.PORT || 3000) //Puerto de heroku
