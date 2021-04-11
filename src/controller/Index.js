



exports.Index = async(req,res) => {
    res.render('index')
}




exports.ApiDDD = async(req, res) => {

  const ddd = Number(req.params.codigo)




 function localizar() {

    if (ddd == 13){

      let data = {
        "DDD":13,
        "Municipios":
          [
            "Bertioga",
            "Cubatão",
            "Iguape",
            "Itariri",
            "Miracatu",
            "Pedro de Toledo",
            "Sete Barras",
            "Cajati", 
            "Eldorado",
            "Ilha Comprida",
            "Jacupiranga",
            "Cananeia",
            "Juquia",
            "Pariquera-Açu",
            "Registro",
            "Guarujá",
            "Mongaguá",
            "Peruíbe",
            "Praia Grande",
            "Santos",
            "São Vicente"
          ]
      }
      return data 
      } else if (ddd == 11){
          let data = {
            "DDD":11,
            "Municipios":
              [
                "Aluminio",
                "Aracariguama",
                "Aruja",
                "Atibaia",
                "Barueri",
                "Biritiba-Mirim",
                "Bom Jesus dos Perdoes",
                "Braganca Paulista",
                "Cabreuva",
                "Caieiras",
                "Cajamar",
                "Campo Limpo Paulista",
                "Carapicuiba",
                "Ciabyte",
                "Cotia",
                "Diadema",
                "Embu",
                "Embu-Guaçu",
                "Ferraz de Vasconcelos",
                "Francisco Morato",
                "Franco da Rocha",
                "Guararema",
                "Guarulhos",
                "Igarata",
                "Itapecerica da Serra",
                "Itapevi",
                "Itaquaquecetuba",
                "Itatiba",
                "Itu",
                "Itupeva",
                "Jandira",
                "Jarinu",
                "Joanópolis",
                "Jundiai",
                "Juquitiba",
                "Mairinque",
                "Mairipora",
                "Maua",
                "Moji das Cruzes",
                "Morungaba",
                "Nazare Paulista",
                "Osasco",
                "Pedra Bela",
                "Pinhalzinho",
                "Piracaia",
                "Pirapora do Bom Jesus",
                "Poa",
                "Ribeirao Pires",
                "Rio Grande da Serra",
                "Salesópolis",
                "Salto",
                "Santa Isabel",
                "Santana de Parnaiba",
                "Santo Andre",
                "São Bernardo do Campo",
                "São Caetano do Sul",
                "São Lourenço da Serra",
                "São Paulo",
                "São Roque",
                "Suzano",
                "Taboao da Serra",
                "Tuiuti",
                "Vargem",
                "Vargem Grande Paulista",
                "Varzea Paulista"
              ]  
          }
          return data 





    }else{
        return `${this.ddd} Não Localizado`
    }
  }






    

    res.json((localizar()))
}



 
  




