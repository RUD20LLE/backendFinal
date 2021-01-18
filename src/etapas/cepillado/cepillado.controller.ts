import { Controller, Post, Body, Get } from '@nestjs/common';
import { CepilladoService } from './cepillado.service';

@Controller('cepillado')
export class CepilladoController {
  constructor(private readonly cepilladoService: CepilladoService) {}

  @Post('control')
  controlarCepillado(@Body('estado') estado: string): Promise<string> {
    return this.cepilladoService.controlarCepillado(estado);
  }

  @Get('estado')
  obtenerEstado(): Promise<string> {
    return this.cepilladoService.obtenerEstado();
  }
}
