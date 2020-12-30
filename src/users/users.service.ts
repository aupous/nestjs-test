import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(): Promise<User> {
    return this.userModel.create({
      name: 'Tuan',
      email: 'tuan@gmail.com',
      password: '1',
      isActive: true,
    } as User);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ where: { email } });
  }
}
