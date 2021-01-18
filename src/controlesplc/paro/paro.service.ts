import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { MqttService } from '../../mqtt/mqtt.service';

@Injectable()
export class ParoService {
  private readonly logger = new Logger(ParoService.name);

  constructor(private readonly mqttService: MqttService) {}

  async controlarParo(estado: string): Promise<string> {
    try {
      const result = await this.mqttService.publish(
        'ESP32PLC/control/paro',
        estado,
      );
      this.logger.log(`Resultado de controlarParo: ${JSON.stringify(result)}`);
      return result;
    } catch (error) {
      this.logger.error('Error en controlarParo', error);
      throw new InternalServerErrorException(
        error.message || 'Error desconocido en controlarParo',
      );
    }
  }
}
