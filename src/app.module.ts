import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoginModule } from './login/login.module';
import { BandaTransportadoraModule } from './etapas/banda-transportadora/banda-transportadora.module';
import { EnjabonadoModule } from './etapas/enjabonado/enjabonado.module';
import { CepilladoModule } from './etapas/cepillado/cepillado.module';
import { SecadoModule } from './etapas/secado/secado.module';
import { MqttModule } from './mqtt/mqtt.module';
import { InicioModule } from './controlesplc/inicio/inicio.module';
import { ContinuarModule } from './controlesplc/continuar/continuar.module';
import { PausaModule } from './controlesplc/pausa/pausa.module';
import { ParoModule } from './controlesplc/paro/paro.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    LoginModule,
    BandaTransportadoraModule,
    EnjabonadoModule,
    CepilladoModule,
    SecadoModule,
    MqttModule,
    InicioModule,
    ParoModule,
    PausaModule,
    ContinuarModule,
  ],
})
export class AppModule {}
