"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Veiculo extends Model {
  movimentacao() {
    return this.hasMany("App/Models/Movimentacao");
  }
}

module.exports = Veiculo;
