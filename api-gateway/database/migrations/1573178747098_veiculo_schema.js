"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class VeiculoSchema extends Schema {
  up() {
    this.create("veiculos", table => {
      table.increments();
      table
        .string("placa")
        .notNullable()
        .unique();
      table.string("modelo");
      table.string("cor");
      table.timestamps();
    });
  }

  down() {
    this.drop("veiculos");
  }
}

module.exports = VeiculoSchema;
