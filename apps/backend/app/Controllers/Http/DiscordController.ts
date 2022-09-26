import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DiscordToken from 'App/Models/DiscordToken'
import User from 'App/Models/User'

export default class DiscordController {
  public async redirect({ ally }: HttpContextContract) {
    return ally.use('discord').redirect()
  }

  public async callback({ ally, auth, response }: HttpContextContract) {
    const { id, token, email, name, avatarUrl } = await ally.use('discord').user()

    const user = await User.updateOrCreate(
      {
        discordId: id,
      },
      {
        email: email || undefined,
        username: name,
        avatarUrl: avatarUrl || undefined,
      }
    )

    await DiscordToken.updateOrCreate(
      {
        userId: user.id,
      },
      {
        token: token.token,
        type: token.type,
        refreshToken: token.refreshToken,
        expiresAt: token.expiresAt,
        expiresIn: token.expiresIn,
      }
    )

    await auth.use('web').login(user)
    return response.redirect('/')
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('web').logout()
    response.redirect('/')
  }
}
