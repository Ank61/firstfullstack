//import modules express body-parser cors

let express = require('express')

let bodyparser = require('body-parser')

let cors = require('cors')

//create rest object

let app = express()

//set JSON as MIME type

app.use(bodyparser.json())

//client is not sending form data -> encoding JSON

app.use(bodyparser.urlencoded({extended:false}))

//enable CORS -> Cross Origine Resource Sharing -> communication among various ports

app.use(cors()) 

//import fetch insert update delete modules

let fetch = require('./fetch')

let insert = require('./insert')

let update = require('./update')

let remov = require('./delete')

//use above module

app.use('/fetch',fetch)

app.use('/insert',insert)

app.use('/update',update)

app.use('/delete',remov)

//assign port no

app.listen(8080)

console.log('Server listening port no 8080')

