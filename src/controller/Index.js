const Localizar = require("../controller/ddd.js")

exports.Index = async (req, res) => {
  res.render('index')
}

exports.Politica = async (req, res) => {
  res.render('politica')
}

exports.Sobre = async (req, res) => {
  res.render('sobre')
}

exports.Historia = async (req, res) => {
  res.render('historia')
}

exports.EstadosService = async (req, res) => {
  let estado = req.params.estado

  if (estado === 'SaoPaulo') {
    res.render('estados/Saopaulo')
  } else if (estado === 'RioDeJaneiro') {
    res.render('estados/RioDeJaneiro')
  } else if (estado === 'MinasGerais') {
    res.render('estados/MinasGerais')
  } else if (estado === 'EspiritoSanto') {
    res.render('estados/EspiritoSanto')
  } else if (estado === 'Parana') {
    res.render('estados/Parana')
  } else if (estado === 'SantaCatarina') {
    res.render('estados/SantaCatarina')
  } else if (estado === 'RioGrandeDoSul') {
    res.render('estados/RioGrandeDoSul')
  } else if (estado === 'DistritoFederal') {
    res.render('estados/DistritoFederal')
  } else if (estado === 'Goias') {
    res.render('estados/Goias')
  } else if (estado === 'MatoGrosso') {
    res.render('estados/MatoGrosso')
  } else if (estado === 'MatoGrossoDoSul') {
    res.render('estados/MatoGrossoDoSul')
  } else if (estado === 'Acre') {
    res.render('estados/Acre')
  } else if (estado === 'Rondonia') {
    res.render('estados/Rondonia')
  } else if (estado === 'Bahia') {
    res.render('estados/Bahia')
  }else if (estado === 'Sergipe') {
    res.render('estados/Sergipe')
  }else if (estado === 'Tocantins') {
    res.render('estados/Tocantins')
  }else if (estado === 'Pernambuco') {
    res.render('estados/Pernambuco')
  }else if (estado === 'Alagoas') {
    res.render('estados/Alagoas')
  }else if (estado === 'Paraiba') {
    res.render('estados/Paraiba')
  }else if (estado === 'RioGrandeDoNorte') {
    res.render('estados/RioGrandeDoNorte')
  }else if (estado === 'Ceara') {
    res.render('estados/Ceara')
  }else if (estado === 'Piaui') {
    res.render('estados/Piaui')
  }else if (estado === 'Ceara') {
    res.render('estados/Ceara')
  }else if (estado === 'Ceara') {
    res.render('estados/Ceara')
  }else if (estado === 'Ceara') {
    res.render('estados/Ceara')
  }else if (estado === 'Ceara') {
    res.render('estados/Ceara')
  }
}




exports.DDDCidade = async (req, res) => {
  let estados = req.params.estados
  const DDD = req.params.ddd

  if (estados === 'SaoPaulo') {
    if (DDD === '11') {
      res.render('DDD/SaoPaulo/11')
    } else if (DDD === '12') {
      res.render('DDD/SaoPaulo/12')
    } else if (DDD === '13') {
      res.render('DDD/SaoPaulo/13')
    } else if (DDD === '14') {
      res.render('DDD/SaoPaulo/14')
    } else if (DDD === '15') {
      res.render('DDD/SaoPaulo/15')
    } else if (DDD === '16') {
      res.render('DDD/SaoPaulo/16')
    } else if (DDD === '17') {
      res.render('DDD/SaoPaulo/17')
    } else if (DDD === '18') {
      res.render('DDD/SaoPaulo/18')
    } else if (DDD === '19') {
      res.render('DDD/SaoPaulo/19')
    }
  } else if (estados === 'RioDeJaneiro') {
    if (DDD === '21') {
      res.render('DDD/RioDeJaneiro/21')
    } else if (DDD === '22') {
      res.render('DDD/RioDeJaneiro/22')
    } else if (DDD === '24') {
      res.render('DDD/RioDeJaneiro/24')
    }
  } else if (estados === 'EspiritoSanto') {
    if (DDD === '27') {
      res.render('DDD/EspiritoSanto/27')
    } else if (DDD === '28') {
      res.render('DDD/EspiritoSanto/28')
    }
  } else if (estados === 'MinasGerais') {
    if (DDD === '31') {
      res.render('DDD/MinasGerais/31')
    } else if (DDD === '32') {
      res.render('DDD/MinasGerais/32')
    } else if (DDD === '33') {
      res.render('DDD/MinasGerais/33')
    } else if (DDD === '34') {
      res.render('DDD/MinasGerais/34')
    } else if (DDD === '35') {
      res.render('DDD/MinasGerais/35')
    } else if (DDD === '37') {
      res.render('DDD/MinasGerais/37')
    } else if (DDD === '38') {
      res.render('DDD/MinasGerais/38')
    }
  } else if (estados === 'Parana') {
    if (DDD === '41') {
      res.render('DDD/Parana/41')
    } else if (DDD === '42') {
      res.render('DDD/Parana/42')
    } else if (DDD === '43') {
      res.render('DDD/Parana/43')
    } else if (DDD === '44') {
      res.render('DDD/Parana/44')
    } else if (DDD === '45') {
      res.render('DDD/Parana/45')
    } else if (DDD === '46') {
      res.render('DDD/Parana/46')
    }
  } else if (estados === 'SantaCatarina') {
    if (DDD === '47') {
      res.render('DDD/SantaCatarina/47')
    } else if (DDD === '48') {
      res.render('DDD/SantaCatarina/48')
    } else if (DDD === '49') {
      res.render('DDD/SantaCatarina/49')
    }
  } else if (estados === 'RioGrandeDoSul') {
    if (DDD === '51') {
      res.render('DDD/RioGrandeDoSul/51')
    } else if (DDD === '53') {
      res.render('DDD/RioGrandeDoSul/53')
    } else if (DDD === '54') {
      res.render('DDD/RioGrandeDoSul/54')
    } else if (DDD === '55') {
      res.render('DDD/RioGrandeDoSul/55')
    }
  } else if (estados === 'DistritoFederal') {
    if (DDD === '61') {
      res.render('DDD/DistritoFederal/61')
    }
  } else if (estados === 'Goias') {
    if (DDD === '62') {
      res.render('DDD/Goias/62')
    } else if (DDD === '64') {
      res.render('DDD/Goias/64')
    }
  } else if (estados === 'MatoGrosso') {
    if (DDD === '65') {
      res.render('DDD/MatoGrosso/65')
    } else if (DDD === '66') {
      res.render('DDD/MatoGrosso/66')
    }
  } else if (estados === 'MatoGrossoDoSul') {
    if (DDD === '67') {
      res.render('DDD/MatoGrossoDoSul/67')
    }
  } else if (estados === 'Tocantins') {
    if (DDD === '63') {
      res.render('DDD/Tocantins/63')
    }
  } else if (estados === 'Acre') {
    if (DDD === '68') {
      res.render('DDD/Acre/68')
    }
  } else if (estados === 'Rondonia') {
    if (DDD === '69') {
      res.render('DDD/Rondonia/69')
    }
  } else if (estados === 'Bahia') {
    if (DDD === '71') {
      res.render('DDD/Bahia/71')
    } else if (DDD === '73') {
      res.render('DDD/Bahia/73')
    } else if (DDD === '74') {
      res.render('DDD/Bahia/74')
    } else if (DDD === '75') {
      res.render('DDD/Bahia/75')
    } else if (DDD === '77') {
      res.render('DDD/Bahia/77')
    }
  } else if (estados === 'Sergipe') {
    if (DDD === '79') {
      res.render('DDD/Sergipe/79')
    }
  }else if (estados === 'Pernambuco') {
    if (DDD === '81') {
      res.render('DDD/Pernambuco/81')
    }else if (DDD === '87') {
      res.render('DDD/Pernambuco/87')
    }
  }else if (estados === 'Alagoas') {
    if (DDD === '82') {
      res.render('DDD/Alagoas/82')
    }
  }else if (estados === 'Paraiba') {
    if (DDD === '83') {
      res.render('DDD/Paraiba/83')
    }
  }else if (estados === 'RioGrandeDoNorte') {
    if (DDD === '84') {
      res.render('DDD/RioGrandeDoNorte/84')
    }
  }else if (estados === 'Ceara') {
    if (DDD === '85') {
      res.render('DDD/Ceara/85')
    }else if (DDD === '88') {
      res.render('DDD/Ceara/88')
    }
  }else if (estados === 'Piaui') {
    if (DDD === '86') {
      res.render('DDD/Piaui/86')
    }else if (DDD === '89') {
      res.render('DDD/Piaui/89')
    }
  }
}





exports.ApiDDD = async (req, res) => {
  const ddd = Number(req.params.codigo)

  if (ddd != ddd.toString()) {
    return res.status(400).json({ erro: "Formato inválido!" })
  }
  res.json((Localizar.localizar(ddd)))
}









