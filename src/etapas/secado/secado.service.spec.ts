import { Test, TestingModule } from '@nestjs/testing';
import { SecadoService } from './secado.service';

describe('SecadoService', () => {
  let service: SecadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecadoService],
    }).compile();

    service = module.get<SecadoService>(SecadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
