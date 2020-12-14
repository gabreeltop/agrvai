'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pedido extends Model {
    user(){
        return this.belongsTo("App/Models/User")
    }
    resposta(){
        return this.belongsTo("App/Models/Pedido")
    }
}

module.exports = Pedido
