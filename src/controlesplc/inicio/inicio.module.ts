import { Module } from '@nestjs/common';
import { InicioService } from './inicio.service';
import { InicioController } from './inicio.controller';
import { MqttModule } from '../../mqtt/mqtt.module';

@Module({
  imports: [MqttModule],
  controllers: [InicioController],
  providers: [InicioService],
})
export class InicioModule {}
