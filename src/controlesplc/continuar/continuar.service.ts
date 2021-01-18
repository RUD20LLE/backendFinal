import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { MqttService } from '../../mqtt/mqtt.service';

@Injectable()
export class ContinuarService {
  private readonly logger = new Logger(ContinuarService.name);

  constructor(private readonly mqttService: MqttService) {}

  async controlarContinuar(estado: string): Promise<string> {
    try {
      const result = await this.mqttService.publish(
        'ESP32PLC/control/continuar',
        estado,
      );
      this.logger.log(
        `Resultado de controlarContinuar: ${JSON.stringify(result)}`,
      );
      return result;
    } catch (error) {
      this.logger.error('Error en controlarContinuar', error);
      throw new InternalServerErrorException(
        error.message || 'Error desconocido en controlarContinuar',
      );
    }
  }
}
