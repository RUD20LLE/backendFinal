import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LoginService {
  private readonly logger = new Logger(LoginService.name);

  constructor(private configService: ConfigService) {}

  validateUser(username: string, password: string): boolean {
    const envUsername = this.configService.get<string>('USER_NAME');
    const envPassword = this.configService.get<string>('USER_PASSWORD');

    this.logger.debug(
      `envUsername: ${envUsername}, envPassword: ${envPassword}`,
    );
    this.logger.debug(`Received username: ${username}, password: ${password}`);

    return username === envUsername && password === envPassword;
  }
}
