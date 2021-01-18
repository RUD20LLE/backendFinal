import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { MqttService } from '../../mqtt/mqtt.service';

@Injectable()
export class InicioService {
  private readonly logger = new Logger(InicioService.name);

  constructor(private readonly mqttService: MqttService) {}

  async controlarInicio(estado: string): Promise<string> {
    try {
      const result = await this.mqttService.publish(
        'ESP32PLC/control/inicio',
        estado,
      );
      this.logger.log(
        `Resultado de controlarInicio: ${JSON.stringify(result)}`,
      );
      return result;
    } catch (error) {
      this.logger.error('Error en controlarInicio', error);
      throw new InternalServerErrorException(
        error.message || 'Error desconocido en controlarInicio',
      );
    }
  }
}
