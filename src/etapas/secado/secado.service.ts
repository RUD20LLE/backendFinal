import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { MqttService } from '../../mqtt/mqtt.service';

@Injectable()
export class SecadoService {
  private readonly logger = new Logger(SecadoService.name);
  private estadoActual: string;

  constructor(private readonly mqttService: MqttService) {
    this.mqttService.subscribe('ESP32/secado/estado');
    this.mqttService.onMessage('ESP32/secado/estado', (message) => {
      this.estadoActual = message;
    });
  }

  async controlarSecado(estado: string): Promise<string> {
    try {
      const result = await this.mqttService.publish(
        'ESP32/secado/control',
        estado,
      );
      this.logger.log(
        `Resultado de controlarSecado: ${JSON.stringify(result)}`,
      );
      return result;
    } catch (error) {
      this.logger.error('Error en controlarSecado', error);
      throw new InternalServerErrorException(
        error.message || 'Error desconocido en controlarSecado',
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
