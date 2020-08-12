const db = require('../db')
const ObjectId = require('mongodb').ObjectID

exports.all = function(cb) {
    db.get().collections('bookmakers').find().toArray(function(err, docs) {
        cb(err, docs)
    })
}

exports.findById = function(id, cb) {
    db.get().collection('bookmakers').findOne({_id: ObjectId(id)}, function(err, doc) {
        cb(err, doc)
    })
}

exports.create = function(bookmaker, cb) {
    db.get().collection('bookmakers').insert(bookmaker, function(err, result) {
        cb(err, result)
    })
}

exports.update = function(id, newData, cb) {
    db.get().collection('bookmakers').updateOne(
        {_id: ObjectId(id)}, 
        newData,
        function(err, result) {
        cb(err, result)
    })
}

exports.delete = function(id, cb) {
    db.get().collection('bookmakers').deleteOne(
        {_id: ObjectId(id)}, 
        function(err, result) {
        cb(err, result)
    })
}