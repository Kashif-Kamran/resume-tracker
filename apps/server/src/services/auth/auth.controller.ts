import { Controller, Post, Get, Body, HttpCode } from '@nestjs/common';
import { LoginUserDto, RegisterUserRequestDto } from './auth.dtos';
import { RegisterUserUseCase } from './use-cases/register.use-case';

@Controller('auth')
export class AuthController {
  constructor(private readonly registerUserUC: RegisterUserUseCase) {}

  @Post('register')
  @HttpCode(201)
  async register(@Body() registerUserDto: RegisterUserRequestDto) {
    return this.registerUserUC.execute(registerUserDto);
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() loginUserDto: LoginUserDto) {

    return 'Login Called';
  }
}
