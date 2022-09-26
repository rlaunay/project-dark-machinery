import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdminController {
  public async index({ view }: HttpContextContract) {
    return view.render('pages/admin/index')
  }
}
