import { Controller, Post, Body } from '@nestjs/common';
import { PausaService } from './pausa.service';

@Controller('controlesplc/pausa')
export class PausaController {
  constructor(private readonly pausaService: PausaService) {}

  @Post('control')
  controlarPausa(@Body('estado') estado: string): Promise<string> {
    return this.pausaService.controlarPausa(estado);
  }
}
