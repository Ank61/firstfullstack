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

router.post("/", (req, res) => {


    let id=req.body.id    

    connection.query(`delete from product where id = ${id}`, (err, result) => {

        if (err)

            res.json({ 'delete': 'error' + err })

        else {

            console.log('Data deleted')

            res.json({ 'delete': result.affectedRows })

        }

    })

})

//export router

module.exports = router

