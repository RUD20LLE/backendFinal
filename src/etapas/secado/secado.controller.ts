import { Controller, Post, Body, Get } from '@nestjs/common';
import { SecadoService } from './secado.service';

@Controller('secado')
export class SecadoController {
  constructor(private readonly secadoService: SecadoService) {}

  @Post('control')
  controlarSecado(@Body('estado') estado: string): Promise<string> {
    return this.secadoService.controlarSecado(estado);
  }

  @Get('estado')
  obtenerEstado(): Promise<string> {
    return this.secadoService.obtenerEstado();
  }
}
