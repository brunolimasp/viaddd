



exports.Index = async(req,res) => {
    
    
}




exports.ApiDDD = async(req, res) => {

  const ddd = Number(req.params.codigo)




 function localizar() {

    if (ddd == 13){

      let data = {
        "DDD":13,
        "Municipios":
          [
           "Peruibe", "São vicente", "Santos"
          ]
      }
       return data
       
    }else{
        return `${this.ddd} Não Localizado`
    }
  }






    

    res.json((localizar()))
}



 
  


