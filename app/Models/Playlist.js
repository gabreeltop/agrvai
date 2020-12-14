'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Playlist extends Model {
    user(){
        return this.belongsTo("App/Models/User")
    }
    musica(){
        return this.belongsToMany('App/Models/Musica','id_playlist','id_musica','id','id').pivotTable('musica_playlists')
    }
}

module.exports = Playlist
