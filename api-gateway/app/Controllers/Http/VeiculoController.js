"use strict";
const Veiculo = use("App/Models/Veiculo");
const moment = require("moment");

class VeiculoController {

  async index() {
    const veiculos = await Veiculo.query()
      .with("movimentacao")
      .fetch();
    return veiculos.toJSON();
  }

  async store({ request, response }) {
    const veiculo = await Veiculo.findOrCreate(request.all());
    const movimentacao = await veiculo
      .movimentacao()
      .where("saida", null)
      .fetch();
    console.log(movimentacao.toJSON().length);
    if (movimentacao.toJSON().length > 0) {
      return response.status(400).send({
        message: `Não foi registrada a saida veiculo de placa: ${veiculo.placa}, para continuar essa operação precisa registrar a saída`
      });
    }
    return veiculo
      .movimentacao()
      .create({ entrada: moment().format("YYYY-MM-DD HH:mm:ss") });
  }

  async update({request, response}) {
    const veiculo = await Veiculo.query().with('movimentacao').where('placa',request.placa).fetch();

    console.log(veiculo.toJSON());
  }

}

module.exports = VeiculoController;
