const express = require('express');
const mysql = require('mysql')

const con = mysql.createConnection({
    'host': 'localhost',
    'username': 'root',
    'password': 'root'
})

con.connect(err) => {
    if(err){
        console.log(err.message)
    }else{
        console.log('successfully connected with mysql')
    }

    var createDatabase = "create database node_demo";
    con.query(createDatabase, (err, result) => {
        if(err) throw err;
        console.log(result);
    })

    
})



const app = express();

app.get('/', (req, res) => {
    res.send("App is running")
})


const port = 3000;
app.listen(port, (req, res) => {
    console.log(`Server running on port: ${port}`)
})
