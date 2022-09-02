//import express module

let express = require('express')

//create router instance

let router = express.Router()

//import database connection

let conn = require("./db_config/db_connect")

//get connection obj

let connection = conn.getConnection()

//connect to database

connection.connect()

//create rest api

router.get("/", (req, res) => { 

    connection.query("select * from product",(err, recordsArray)=>{

        if(err)

            res.json({'message':'error'+err})

        else

        {

            console.log('Data sent')

            res.json(recordsArray)

        }

    })

})

//export router

module.exports = router