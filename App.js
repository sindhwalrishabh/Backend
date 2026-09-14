require('dotenv').config()
const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req,res) => {
    res.send('hello request for the response')
});

app.get('/twiitter',(req,res) => {
    res.send('hello hello')
});

app.get('/login', (req,res)=>{
    res.send('your successfully login into my backend')
});

app.listen(process.env.port,()=> {
    console.log(`hello world this backend http://localhost:${port}`);
})