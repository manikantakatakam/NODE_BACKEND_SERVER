const express = require('express');
const DB = require('./DatabaseConnection/mongoose')
const merchantRoute = require('./Routes/merchantRoute')
const path = require('path'); 

const app = express();
const PORT = 4000;

//database connection
DB();

app.get('/', (req, res) => {
    res.send('<h1>Hello NODE API</h1>')
    //res.sendFile(path.join(__dirname, 'Views','tool.html'));
})


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api', merchantRoute);

app.listen(PORT, ()=> {
    console.log(`Node API app is running on port ${PORT}`)
});

