import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class WikiController {
  public async index({ view }: HttpContextContract) {
    return view.render('pages/wiki/index')
  }

  public async category({ view }: HttpContextContract) {
    return view.render('pages/wiki/category')
  }

  public async page({ view }: HttpContextContract) {
    return view.render('pages/wiki/page')
  }
}
