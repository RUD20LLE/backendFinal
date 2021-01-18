import { Test, TestingModule } from '@nestjs/testing';
import { EnjabonadoService } from './enjabonado.service';

describe('EnjabonadoService', () => {
  let service: EnjabonadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnjabonadoService],
    }).compile();

    service = module.get<EnjabonadoService>(EnjabonadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
