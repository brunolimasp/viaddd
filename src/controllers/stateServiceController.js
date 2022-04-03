exports.stateService = async (req, res) => {
  let estado = req.params.estado;
 
  if (estado === "SaoPaulo") {
    res.render("states/Saopaulo");
  } else if (estado === "RioDeJaneiro") {
    res.render("states/RioDeJaneiro");
  } else if (estado === "MinasGerais") {
    res.render("states/MinasGerais");
  } else if (estado === "EspiritoSanto") {
    res.render("states/EspiritoSanto");
  } else if (estado === "Parana") {
    res.render("states/Parana");
  } else if (estado === "SantaCatarina") {
    res.render("states/SantaCatarina");
  } else if (estado === "RioGrandeDoSul") {
    res.render("states/RioGrandeDoSul");
  } else if (estado === "DistritoFederal") {
    res.render("states/DistritoFederal");
  } else if (estado === "Goias") {
    res.render("states/Goias");
  } else if (estado === "MatoGrosso") {
    res.render("states/MatoGrosso");
  } else if (estado === "MatoGrossoDoSul") {
    res.render("states/MatoGrossoDoSul");
  } else if (estado === "Acre") {
    res.render("states/Acre");
  } else if (estado === "Rondonia") {
    res.render("states/Rondonia");
  } else if (estado === "Bahia") {
    res.render("states/Bahia");
  } else if (estado === "Sergipe") {
    res.render("states/Sergipe");
  } else if (estado === "Tocantins") {
    res.render("states/Tocantins");
  } else if (estado === "Pernambuco") {
    res.render("states/Pernambuco");
  } else if (estado === "Alagoas") {
    res.render("states/Alagoas");
  } else if (estado === "Paraiba") {
    res.render("states/Paraiba");
  } else if (estado === "RioGrandeDoNorte") {
    res.render("states/RioGrandeDoNorte");
  } else if (estado === "Ceara") {
    res.render("states/Ceara");
  } else if (estado === "Piaui") {
    res.render("states/Piaui");
  } else if (estado === "Ceara") {
    res.render("states/Ceara");
  } else if (estado === "Ceara") {
    res.render("states/Ceara");
  } else if (estado === "Ceara") {
    res.render("states/Ceara");
  } else if (estado === "Ceara") {
    res.render("states/Ceara");
  }
};