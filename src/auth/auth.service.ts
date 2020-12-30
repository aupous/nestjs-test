import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserAttributes } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && user.password === pass) {
      const { password: _, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const { email, id: sub } = user;
    return {
      user,
      accessToken: this.jwtService.sign({ email, sub }),
    };
  }
}
