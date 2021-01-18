import { Controller, Post, Body } from '@nestjs/common';
import { ParoService } from './paro.service';

@Controller('controlesplc/paro')
export class ParoController {
  constructor(private readonly paroService: ParoService) {}

  @Post('control')
  controlarParo(@Body('estado') estado: string): Promise<string> {
    return this.paroService.controlarParo(estado);
  }
}
