import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser() {
    return this.userService.create();
  }

  @Get()
  async getAll() {
    return this.userService.findAll();
  }
}
