const Bookmakers = require('../models/bookmaker')

exports.all = function(req, res) {
    Bookmakers.all(function(err, docs) {
        if(err) {
            return res.sendStatus(500)
        }
        res.send(docs)
    })
}

exports.findById = function(req, res) {
    Bookmakers.findById(req.params.id, function(err, doc) {
        if(err) {
            return res.sendStatus(5002)
        }
        res.send(doc)
    })
}

exports.create = function(req, res) {
    let bookmaker = {
        name: req.body.name
    }
    Bookmakers.create(bookmaker, function(err,result) {
        if(err) {
            return res.sendStatus(500)
        }
        res.send(bookmaker)
    })
}

exports.update = function(req, res) {
    Bookmakers.update(req.params.id, {name: req.body.name}, function(err, result) {
        if(err) {
            return res.sendStatus(500)
        }
        res.sendStatus(200)
    })
}

exports.delete = function(id, cb) {
    Bookmakers.delete(req.params.id, function(err, result) {
        if(err) {
            return res.sendStatus(500)
        }
        res.sendStatus(200)
    })
}