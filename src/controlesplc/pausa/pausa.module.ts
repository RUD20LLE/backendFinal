import { Module } from '@nestjs/common';
import { PausaService } from './pausa.service';
import { PausaController } from './pausa.controller';
import { MqttModule } from '../../mqtt/mqtt.module';

@Module({
  imports: [MqttModule],
  controllers: [PausaController],
  providers: [PausaService],
})
export class PausaModule {}
