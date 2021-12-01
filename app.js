const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.send('Welcome Azure')
})



app.listen(8070, ()=>{
    console.log('server is listening on port 8070...')
})