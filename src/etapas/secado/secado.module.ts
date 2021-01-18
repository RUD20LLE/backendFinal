import { Module } from '@nestjs/common';
import { SecadoService } from './secado.service';
import { SecadoController } from './secado.controller';
import { MqttModule } from '../../mqtt/mqtt.module';

@Module({
  imports: [MqttModule],
  controllers: [SecadoController],
  providers: [SecadoService],
})
export class SecadoModule {}
