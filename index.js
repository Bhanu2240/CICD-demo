const  express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("demo for cicd");
})
app.listen(3000,()=>{
    console.log("server is running onn port 3000");
})