import { Module } from '@nestjs/common';
import { EnjabonadoService } from './enjabonado.service';
import { EnjabonadoController } from './enjabonado.controller';
import { MqttModule } from '../../mqtt/mqtt.module';

@Module({
  imports: [MqttModule],
  controllers: [EnjabonadoController],
  providers: [EnjabonadoService],
})
export class EnjabonadoModule {}
