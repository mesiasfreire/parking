"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TarifasSchema extends Schema {
  up() {
    this.create("tarifas", table => {
      table.increments();
      table.time("hora_inicial", [4]);
      table.time("hora_final", [4]);
      table.decimal("valor");
      table.string("dia_inicio");
      table.string("dia_final");
      table.timestamps();
    });
  }

  down() {
    this.drop("tarifas");
  }
}

module.exports = TarifasSchema;
