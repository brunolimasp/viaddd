const Localizar = require ("../controller/ddd.js")


exports.Index = async(req,res) => {
    res.render('index')
}




exports.ApiDDD = async(req, res) => {

  const ddd = Number(req.params.codigo)

    res.json(Localizar.merda)
    

    // res.json((Localizar.localizar(ddd)))
}



 
  




