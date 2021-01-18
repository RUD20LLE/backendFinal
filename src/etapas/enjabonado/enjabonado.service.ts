import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { MqttService } from '../../mqtt/mqtt.service';

@Injectable()
export class EnjabonadoService {
  private readonly logger = new Logger(EnjabonadoService.name);
  private estadoActual: string;

  constructor(private readonly mqttService: MqttService) {
    this.mqttService.subscribe('ESP32/enjabonado/estado');
    this.mqttService.onMessage('ESP32/enjabonado/estado', (message) => {
      this.estadoActual = message;
    });
  }

  async controlarEnjabonado(estado: string): Promise<string> {
    try {
      const result = await this.mqttService.publish(
        'ESP32/enjabonado/control',
        estado,
      );
      this.logger.log(
        `Resultado de controlarEnjabonado: ${JSON.stringify(result)}`,
      );
      return result;
    } catch (error) {
      this.logger.error('Error en controlarEnjabonado', error);
      throw new InternalServerErrorException(
        error.message || 'Error desconocido en controlarEnjabonado',
      );
    }
  }

  async obtenerEstado(): Promise<string> {
    if (this.estadoActual) {
      return this.estadoActual;
    } else {
      throw new InternalServerErrorException('Estado no disponible');
    }
  }

  getEstado(): string {
    return this.estadoActual;
  }
}
