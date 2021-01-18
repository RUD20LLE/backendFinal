import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  login(@Body() credentials: { username: string; password: string }) {
    console.log('Credenciales recibidas:', credentials);

    const isValid = this.loginService.validateUser(
      credentials.username,
      credentials.password,
    );

    console.log('Resultado de la validación:', isValid);

    if (isValid) {
      return { status: 'success', message: 'Login successful' };
    } else {
      return { status: 'error', message: 'Invalid credentials' };
    }
  }
}
