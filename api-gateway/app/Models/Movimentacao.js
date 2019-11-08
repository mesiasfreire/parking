"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Movimentacao extends Model {
  static get table() {
    return "movimentacoes";
  }
  veiculo() {
    return this.belongsTo("App/Models/Veiculo");
  }
}

module.exports = Movimentacao;
