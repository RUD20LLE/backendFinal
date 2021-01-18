import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { MqttService } from '../../mqtt/mqtt.service';

@Injectable()
export class BandaTransportadoraService {
  private readonly logger = new Logger(BandaTransportadoraService.name);
  private estadoActual: string;

  constructor(private readonly mqttService: MqttService) {
    this.mqttService.subscribe('ESP32/banda_transportadora/estado');
    this.mqttService.onMessage(
      'ESP32/banda_transportadora/estado',
      (message) => {
        this.estadoActual = message;
      },
    );
  }
  async controlarBanda(estado: string): Promise<string> {
    try {
      const result = await this.mqttService.publish(
        'ESP32/banda_transportadora/control',
        estado,
      );
      this.logger.log(`Resultado de controlarBanda: ${JSON.stringify(result)}`);
      return result;
    } catch (error) {
      this.logger.error('Error en controlarBanda', error);
      throw new InternalServerErrorException(
        error.message || 'Error desconocido en controlarBanda',
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
