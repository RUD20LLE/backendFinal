import { Controller, Post, Body, Get } from '@nestjs/common';
import { BandaTransportadoraService } from './banda-transportadora.service';

@Controller('banda-transportadora')
export class BandaTransportadoraController {
  constructor(private readonly bandaService: BandaTransportadoraService) {}

  @Post('control')
  controlarBanda(@Body('estado') estado: string): Promise<string> {
    return this.bandaService.controlarBanda(estado);
  }

  @Get('estado')
  obtenerEstado(): Promise<string> {
    return this.bandaService.obtenerEstado();
  }
}
