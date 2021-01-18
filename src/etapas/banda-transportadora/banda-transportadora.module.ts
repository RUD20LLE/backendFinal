import { Module } from '@nestjs/common';
import { BandaTransportadoraService } from './banda-transportadora.service';
import { BandaTransportadoraController } from './banda-transportadora.controller';
import { MqttModule } from '../../mqtt/mqtt.module';

@Module({
  imports: [MqttModule],
  controllers: [BandaTransportadoraController],
  providers: [BandaTransportadoraService],
})
export class BandaTransportadoraModule {}
