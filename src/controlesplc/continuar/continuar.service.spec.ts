import { Test, TestingModule } from '@nestjs/testing';
import { ContinuarService } from './continuar.service';

describe('ContinuarService', () => {
  let service: ContinuarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContinuarService],
    }).compile();

    service = module.get<ContinuarService>(ContinuarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
