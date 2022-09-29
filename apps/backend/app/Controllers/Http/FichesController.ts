import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FichesController {
  public async index({ view }: HttpContextContract) {
    return view.render('pages/fiches/index')
  }
}
