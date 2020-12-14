'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Musica extends Model {
    user(){
        return this.belongsTo("App/Models/User")
    }
    playlist(){
        return this.belongsToMany('App/Models/Playlist','id_musica','id_playlist','id','id').pivotTable('musica_playlists')
    }
}

module.exports = Musica
