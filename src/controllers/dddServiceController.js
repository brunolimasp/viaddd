const dddGenerator = require("../utils/dddGenerator.js");

exports.dddService = async (req, res) => {
  const ddd = Number(req.params.codigo);

  if (ddd != ddd.toString()) {
    return res.status(400).json({ erro: "Formato inválido!" });
  }

  res.status(200).json(await dddGenerator(ddd));
};
