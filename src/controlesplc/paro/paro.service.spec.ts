import { Test, TestingModule } from '@nestjs/testing';
import { ParoService } from './paro.service';

describe('ParoService', () => {
  let service: ParoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParoService],
    }).compile();

    service = module.get<ParoService>(ParoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
