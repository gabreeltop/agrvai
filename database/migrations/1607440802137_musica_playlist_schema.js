'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MusicaPlaylistSchema extends Schema {
  up () {
    this.create('musica_playlists', (table) => {
      table.increments()
      table
      .integer("id_musica")
      .unsigned()
      .references("id")
      .inTable("musicas")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table
      .integer("id_playlist")
      .unsigned()
      .references("id")
      .inTable("playlists")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('musica_playlists')
  }
}

module.exports = MusicaPlaylistSchema
