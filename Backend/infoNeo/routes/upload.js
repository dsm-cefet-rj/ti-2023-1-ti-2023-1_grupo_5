var express = require("express");
var router = express.Router();

const multer = require('multer');
const fs = require('file-system');
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId;
const myurl = 'mongodb://localhost:27017';

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });

router.post('/uploadphoto', upload.single('myImage'), (req, res) => {
    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    // Define a JSONobject for the image attributes for saving to database

    var finalImg = {
        contentType: req.file.mimetype,
        image: Buffer.from(encode_image, 'base64')
    };
    db.collection('myCollection').insertOne(finalImg, (err, result) => {
        console.log(result)
        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/')
    })
})

router.get('/photos', (req, res) => {
    db.collection('myCollection').find().toArray((err, result) => {
        const imgArray = result.map(element => element._id);
        console.log(imgArray);
        if (err) return console.log(err)
        res.send(imgArray)

    })
});

router.get('/photo/:id', (req, res) => {
    var filename = req.params.id;
    db.collection('myCollection').findOne({ '_id': ObjectId(filename) }, (err, result) => {
        if (err) return console.log(err)
        res.contentType('image/jpeg');
        res.send(result.image.buffer)
    })
})
module.exports = router;
