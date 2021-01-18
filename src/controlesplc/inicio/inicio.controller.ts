import { Controller, Post, Body } from '@nestjs/common';
import { InicioService } from './inicio.service';

@Controller('controlesplc/inicio')
export class InicioController {
  constructor(private readonly inicioService: InicioService) {}

  @Post('control')
  controlarInicio(@Body('estado') estado: string): Promise<string> {
    return this.inicioService.controlarInicio(estado);
  }
}
