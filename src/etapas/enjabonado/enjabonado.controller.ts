import { Controller, Post, Body, Get } from '@nestjs/common';
import { EnjabonadoService } from './enjabonado.service';

@Controller('enjabonado')
export class EnjabonadoController {
  constructor(private readonly enjabonadoService: EnjabonadoService) {}

  @Post('control')
  controlarEnjabonado(@Body('estado') estado: string): Promise<string> {
    return this.enjabonadoService.controlarEnjabonado(estado);
  }

  @Get('estado')
  obtenerEstado(): Promise<string> {
    return this.enjabonadoService.obtenerEstado();
  }
}
