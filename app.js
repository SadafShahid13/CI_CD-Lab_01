const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.send('Welcome to Azure ak47')
})



app.listen(3000, ()=>{
    console.log('server is listening on port 3000...')
})