import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { MqttService } from '../../mqtt/mqtt.service';

@Injectable()
export class CepilladoService {
  private readonly logger = new Logger(CepilladoService.name);
  private estadoActual: string;

  constructor(private readonly mqttService: MqttService) {
    this.mqttService.subscribe('ESP32/cepillado/estado');
    this.mqttService.onMessage('ESP32/cepillado/estado', (message) => {
      this.estadoActual = message;
    });
  }

  async controlarCepillado(estado: string): Promise<string> {
    try {
      const result = await this.mqttService.publish(
        'ESP32/cepillado/control',
        estado,
      );
      this.logger.log(
        `Resultado de controlarCepillado: ${JSON.stringify(result)}`,
      );
      return result;
    } catch (error) {
      this.logger.error('Error en controlarCepillado', error);
      throw new InternalServerErrorException(
        error.message || 'Error desconocido en controlarCepillado',
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
