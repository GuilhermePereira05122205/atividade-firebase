var express = require('express');
var router = express.Router();
var db = require("../firebase/firebase.js")
var {doc, setDoc, addDoc, collection, getDocs} = require("firebase/firestore")

/* GET home page. */
router.get('/', function(req, res, next) {
  getDocs(collection(db, "agendamentos"))
  .then((data) => {

    var agendamentos = [] 

    data.forEach((docs) => {
      agendamentos.push({id: docs.id, data: docs.data()})
    })

    res.render('index', {
      agendamentos: agendamentos
    })

  }).catch((error) => {
    res.status(500).send("Erro ao listar agendamentos: " + error)
  })
});

router.get('/cadastrar', function(req, res, next){
  res.render("cadastrar")
})

router.post("/cadastrar", function(req, res, next){
  addDoc(collection(db, "agendamentos"), {
    data_contato: req.body.data_contato,
    nome: req.body.nome,
    observacao: req.body.observacao,
    origem: req.body.origem,
    telefone: req.body.telefone
  }).then((data)=> {

    res.redirect("/")

  }).catch((error)=> {
    res.send("erro ao cadastrar agendamento: " + error)
  })
})


module.exports = router;
