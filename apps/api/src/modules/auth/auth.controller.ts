import { Controller, Post, Body, Req } from '@nestjs/common';
import { Request } from 'express';
import { Cookies } from 'src/utils/cookies.decorator';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() createAuthDto: LoginDto) {
    return this.authService.login(createAuthDto);
  }

  @Post('refresh')
  refresh(@Cookies('refreshToken') refreshToken: string | undefined) {
    return 'oui'
  }

  @Post('logout')
  logout(@Req() req: Request) {
    return 'oui'
  }
}
