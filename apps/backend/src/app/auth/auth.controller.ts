import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('create')
  async create(
    @Body() authData: { username: string; email: string; password: string }
  ) {
    return await this.authService.createAuth(authData);
  }
}
