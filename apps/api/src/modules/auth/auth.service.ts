import { Injectable } from '@nestjs/common';
import { DiscordService } from 'src/services/discord.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly discordService: DiscordService
  ) {}

  async login(loginDto: LoginDto) {
    const discordCred = await this.discordService.getDiscordToken(loginDto.code, 'authorization_code');

    const discordUser = await this.discordService.getDiscordUser(discordCred.token_type, discordCred.access_token)

    console.log(discordUser)

    return discordUser;
  }
}
