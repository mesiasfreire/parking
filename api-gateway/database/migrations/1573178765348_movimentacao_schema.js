"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MovimentacaoSchema extends Schema {
  up() {
    this.create("movimentacoes", table => {
      table.increments();
      table
        .integer("veiculo_id")
        .notNullable()
        .references("id")
        .inTable("veiculos");
      table.datetime("entrada").notNullable();
      table.datetime("saida");
      table.decimal("total");
      table.timestamps();
    });
  }

  down() {
    this.drop("movimentacoes");
  }
}

module.exports = MovimentacaoSchema;
