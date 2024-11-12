import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(
    @Body() userData: { username: string; email: string; password: string }
  ) {
    return await this.userService.createUser(userData);
  }
}
