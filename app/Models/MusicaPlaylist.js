'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MusicaPlaylist extends Model {
    musica(){
        return this.belongsTo("App/Models/Musica")
    }
    playlist(){
        return this.belongsTo("App/Models/Playlist")
    }
}

module.exports = MusicaPlaylist
