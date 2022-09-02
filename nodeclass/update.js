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

    let id = req.body.id

    let name = req.body.name

    let cost = req.body.cost

    connection.query(`update product set name = '${name}', cost = ${cost} where id = ${id}`, (err, result) => {

                    
        if (err)

            res.json({ 'update': 'error' + err })

        else {

            console.log('Data updated')

            res.json({ 'update': result.message })

        }

    })

})

//export router

module.exports = router