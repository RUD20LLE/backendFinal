import { Controller, Post, Body } from '@nestjs/common';
import { ContinuarService } from './continuar.service';

@Controller('controlesplc/continuar')
export class ContinuarController {
  constructor(private readonly continuarService: ContinuarService) {}

  @Post('control')
  controlarContinuar(@Body('estado') estado: string): Promise<string> {
    return this.continuarService.controlarContinuar(estado);
  }
}
