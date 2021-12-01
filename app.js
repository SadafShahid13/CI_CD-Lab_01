const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.send('Welcome to Azure mk2')
})



app.listen(8070, ()=>{
    console.log('server is listening on port 8070...')
})