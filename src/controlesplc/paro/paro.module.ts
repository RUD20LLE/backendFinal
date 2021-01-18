import { Module } from '@nestjs/common';
import { ParoService } from './paro.service';
import { ParoController } from './paro.controller';
import { MqttModule } from '../../mqtt/mqtt.module';

@Module({
  imports: [MqttModule],
  controllers: [ParoController],
  providers: [ParoService],
})
export class ParoModule {}
