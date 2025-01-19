import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginUserDto } from '../auth.dtos';
import { UserRepository } from 'src/services/user/user.repository';

@Injectable()
export class LoginUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(loginUserDto: LoginUserDto): Promise<any> {
    const user = this.userRepository.findByEmail(loginUserDto.email);
    if (!user) 
      throw new UnauthorizedException('Invalid email or password');


  }
}
