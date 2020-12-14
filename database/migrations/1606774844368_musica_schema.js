'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MusicaSchema extends Schema {
  up () {
    this.create('musicas', (table) => {
      table.increments()
      table.string('nomemusica', 45).notNullable().unique()
      table.string('artista', 45).notNullable().unique()
      table.string('linkmusica', 45).notNullable().unique()
      table
      .integer("id_user")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('musicas')
  }
}

module.exports = MusicaSchema
