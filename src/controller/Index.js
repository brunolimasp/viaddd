const Localizar = require ("../controller/ddd.js")

exports.Index = async(req,res) => {
    res.render('index')
}

exports.Politica = async(req,res) => {
  res.render('politica')
}

exports.Sobre = async(req,res) => {
  res.render('sobre')
}

exports.Historia = async(req,res) => {
  res.render('historia')
}

exports.ApiDDD = async(req, res) => {
    const ddd = Number(req.params.codigo)

    if(ddd != ddd.toString() ){
      return res.status(400).json({erro:"Formato inválido!"})
    }
    res.json((Localizar.localizar(ddd)))
}



 
  




