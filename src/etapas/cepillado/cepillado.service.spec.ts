import { Test, TestingModule } from '@nestjs/testing';
import { CepilladoService } from './cepillado.service';

describe('CepilladoService', () => {
  let service: CepilladoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CepilladoService],
    }).compile();

    service = module.get<CepilladoService>(CepilladoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
