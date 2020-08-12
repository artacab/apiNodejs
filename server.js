const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
const app = express()
const db = require('./db')
const bookmakerController = require('./controllers/bookmakers.controller')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function(req, res) {
    res.send('Hello APi')
})

app.post('/bookmakers', bookmakerController.create)

app.get('/bookmakers', bookmakerController.all)

app.get('/bookmakers/:id', bookmakerController.findById)

app.put('/bookmakers/:id', bookmakerController.update)

app.delete('/bookmakers/:id', bookmakerController.delete)
/*  */
db.connect('mongodb://localhost:27017/myapi', function(err) {
    if(err) {
        return err
    }
    app.listen(3001, function() {
        console.log('server started!')
    })
})