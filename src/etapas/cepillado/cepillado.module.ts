import { Module } from '@nestjs/common';
import { CepilladoService } from './cepillado.service';
import { CepilladoController } from './cepillado.controller';
import { MqttModule } from '../../mqtt/mqtt.module';

@Module({
  imports: [MqttModule],
  controllers: [CepilladoController],
  providers: [CepilladoService],
})
export class CepilladoModule {}
