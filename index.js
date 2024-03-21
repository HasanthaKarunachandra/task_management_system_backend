const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();



const port=process.env.SERVER_PORT || 3000;

const projectRoute = require('./route/ProjectRoute');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.listen(port,()=>{
   console.log(`Server up & running on port ${port}`);
});

app.use('/api/v1/projects',projectRoute);
