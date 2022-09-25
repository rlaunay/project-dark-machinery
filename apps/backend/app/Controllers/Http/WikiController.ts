import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class WikiController {
  public async index({ view }: HttpContextContract) {
    return view.render('pages/wiki')
  }
}
