const express = require('express');
const app = express();
require('dotenv').config();
const userRouter = require('./api/users/user.router');
//https://www.youtube.com/watch?v=WfCJ3sHnLBM&list=PLtYTVIzWW8XEGCo-sAot0hgZH9Z9OSWvR&index=1

app.get('/api', (req,res)=>{
    res.json({
        success: 1,
        message :'Rest API is working'
    })
})
app.use(express.json()); 
app.use('/api/users', userRouter);

app.listen(process.env.APP_PORT,()=>{
    console.log('server up and running in port '+process.env.APP_PORT)
})