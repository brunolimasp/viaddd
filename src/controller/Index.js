const Localizar = require ("../controller/ddd.js")

exports.Index = async(req,res) => {
    res.render('index')
}

exports.DonatePicpay = async(req,res) => {
  res.render('donatePicpay')
}

exports.ApiDDD = async(req, res) => {
    const ddd = Number(req.params.codigo)

    if(ddd != ddd.toString() ){
      return res.status(400).json({erro:"Formato inválido!"})
    }
    res.json((Localizar.localizar(ddd)))
}



 
  




