import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DiscordService {
  constructor(
    private readonly httpService: HttpService
  ) {}

  async getDiscordToken(token: string, type: 'authorization_code' | 'refresh_token') {
    try {
      const res = await lastValueFrom(this.httpService.post('https://discord.com/api/oauth2/token', new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code: token,
        grant_type: type,
        redirect_uri: 'http://localhost:3000/redirect',
        scope: 'identify',
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }))

      return res.data
    } catch (e) {
      throw new Error(e)
    }
  }

  async getDiscordUser(tokenType: string, accessToken: string) {
    try {
      const res = await lastValueFrom(this.httpService.get('https://discord.com/api/users/@me', {
        headers: {
          authorization: `${tokenType} ${accessToken}`,
        }
      }))

      return res.data;
    } catch (e) {
      throw new Error(e)
    }
  }
}
