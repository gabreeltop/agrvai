'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Pedido = use('App/Models/Pedido')
/**
 * Resourceful controller for interacting with pedidos
 */
class PedidoController {
  /**
   * Show a list of all pedidos.
   * GET pedidos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const pedido = await Pedido.all()
    return pedido
  }

  /**
   * Create/save a new pedido.
   * pedido pedidos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    let {pedidos, id_resposta} = request.only(["pedidos", "id_resposta"])
    if(!pedidos){
      response.status(401).send("Não pode ser vazio.")
      return
    }
    if(!id_resposta){
      id_resposta = null
    }
    const pedido = await Pedido.create({pedidos, id_resposta, id_user:auth.user.id})
    return pedido
  }

  /**
   * Display a single pedido.
   * GET pedidos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const pedido = await Pedido.findOrFail(params.id)
    return pedido
  }

  /**
   * Render a form to update an existing pedido.
   * GET pedidos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update pedido details.
   * PUT or PATCH pedidos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const pedido = await Pedido.findOrFail(params.id)
    const {pedidos}=request.only(["pedidos"])
    pedido.pedidos = pedidos
    await pedido.save()
    return pedido
  }

  /**
   * Delete a pedido with id.
   * DELETE pedidos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const pedido = await Pedido.findOrFail(params.id)
    await pedido.delete()
    return pedido
  }
}

module.exports = PedidoController
