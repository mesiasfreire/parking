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
    try {
      const veiculo = await Veiculo.findOrCreate(request.all());
      const movimentacao = await veiculo
        .movimentacao()
        .where("saida", null)
        .fetch();
      if (movimentacao.toJSON().length > 0) {
        return response.status(400).send({
          message: `Não foi registrada a saida veiculo de placa: ${veiculo.placa}, para continuar essa operação precisa registrar a saída`
        });
      }
      veiculo
        .movimentacao()
        .create({ entrada: moment().format("YYYY-MM-DD HH:mm:ss") });
      response.status(201).send({success:true, message:"Entrada do veiculo registrada com sucesso"})

    } catch (e) {
      return response
        .status(e.status)
        .send({error:{message:'Houve um erro para salvar '}})
    }

  }

  async find({params, request, response}) {
     const veiculo = await Veiculo.findByOrFail('placa',params.placa);
       // const movimentacao = await veiculo.movimentacao().fetch();


    response.send(veiculo.movimentacao().fetch());
  }

}

module.exports = VeiculoController;
