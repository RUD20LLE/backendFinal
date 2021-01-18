import { Module } from '@nestjs/common';
import { ContinuarService } from './continuar.service';
import { ContinuarController } from './continuar.controller';
import { MqttModule } from '../../mqtt/mqtt.module';

@Module({
  imports: [MqttModule],
  controllers: [ContinuarController],
  providers: [ContinuarService],
})
export class ContinuarModule {}
