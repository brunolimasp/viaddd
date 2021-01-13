class Municipio{
    constructor(ddd){
        this.ddd = ddd
    }

    localizar() {
        if (this.ddd == '13'){
            return (JSON.stringify({Estado: "São Paulo", 
                                    cidade01:"Santos",
                                    cidade02:"São Vicente"}));
        }else{
            return `${this.ddd} Não Localizado`
        }
   
    }
}





// APENAS UM TESTE PARA EXIBIR O VALOR NO TERMINAL
const a = new Municipio('13')
console.log(a.localizar())
