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

router.post("/",(req,res)=>{

    let id = req.body.id

    let name = req.body.name

    let cost = req.body.cost

    connection.query(`insert into product values(${id}, '${name}', ${cost})`,(err, result)=>{

        if(err)

            res.json({'insert':'error'+err})

        else

        {

            console.log('Data inserted')

            res.json({'insert':result.affectedRows})

        }

    })

})

//export router

module.exports = router

