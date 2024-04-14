const express = require('express');
const DB = require('./DatabaseConnection/mongoose')
const merchantRoute = require('./Routes/merchantRoute')
const path = require('path'); 


const app = express();
const PORT = 4000;

//database connection
DB();



//middlewares

//app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/Routes', merchantRoute);

app.listen(PORT, ()=> {
    console.log(`Node API app is running on port ${PORT}`)
});

