import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { MqttService } from '../../mqtt/mqtt.service';

@Injectable()
export class PausaService {
  private readonly logger = new Logger(PausaService.name);

  constructor(private readonly mqttService: MqttService) {}

  async controlarPausa(estado: string): Promise<string> {
    try {
      const result = await this.mqttService.publish(
        'ESP32PLC/control/pausa',
        estado,
      );
      this.logger.log(`Resultado de controlarPausa: ${JSON.stringify(result)}`);
      return result;
    } catch (error) {
      this.logger.error('Error en controlarPausa', error);
      throw new InternalServerErrorException(
        error.message || 'Error desconocido en controlarPausa',
      );
    }
  }
}
