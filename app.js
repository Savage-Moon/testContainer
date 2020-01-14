const express = require('express');
const app = express()

app.get('/',(req,res)=> res.send('hello Jasper'));

app.listen(3000, ()=> {
    console.log('Rest API running on port 3000')
})