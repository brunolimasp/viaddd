



// module.exports = {


//     class Municipio{
//         constructor(ddd){
//             this.ddd = ddd
//         }
    
//         localizar() {
//             if (this.ddd == '13'){
//                 return (JSON.stringify(["Peruíbe",
//                                         "Santos",
//                                         "São Vicente"]));
//             }else{
//                 return `${this.ddd} Não Localizado`
//             }
       
//         }
//     }



// }








// // APENAS UM TESTE PARA EXIBIR O VALOR NO TERMINAL
// const a = new Municipio('13')
// console.log(a.localizar())


var merda = '13'

function localizar() {

    if (ddd == 13){

      let data = {
        "DDD":13,
        "Estado":"São Paulo",
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
            "Estado":"São Paulo",
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


  module.exports = merda