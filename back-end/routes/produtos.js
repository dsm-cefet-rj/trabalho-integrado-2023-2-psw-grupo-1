var express = require('express');
var multer = require('multer');
var router = express.Router();
const Produtos = require('../models/produtoSchema');

const storage = multer.diskStorage({
    destination: function(req,file,callback){
                   const path = `teste2/`;
         },
    filename: function(req,file,callback){
                  callback(null,`${file.originalname}`);
     }});

const upload = multer({storage: storage})

// upload = multer({
//     dest: "testee/",
//     filename: (req, file, callback) => { 
//         callback(null, file.fieldname + '-' + Date.now());
//     }
// }) const
       
router.route('/')
.get((req, res, next) => {

    Produtos.find({})
        .then((produtosBanco) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(produtosBanco);
        }, (err => next(err)))
        .catch((err) => next(err))
})

router.post('/', upload.single('file'), (req, res, next) => {
    console.log("testando")
    console.log(JSON.parse(JSON.stringify(req.body.body)))
    console.log(req.file);
    Produtos.create(JSON.parse(req.body.body))
    .then((produto) => {
        console.log('produto criado ', produto);
        res.statusCode = 201;
        res.setHeader('Content-Type', 'multipart/form-data');
        res.json(produto);
    }, (err => next(err)))
    .catch((err) => next(err))
})

router.route('/:id')
.delete((req, res, next) => {
    console.log(req.params.id)
    Produtos.deleteOne({"_id": req.params.id})
    .then((produto) => {
        console.log('produto excluido ', produto);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(produto);
    }, (err => next(err)))
    .catch((err) => next(err))
})

module.exports = router;

//cd back-end && yarn start