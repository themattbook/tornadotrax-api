import { Test, TestingModule } from '@nestjs/testing';
import { TornadoService } from './tornado.service';

describe('TornadoService', () => {
  let service: TornadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TornadoService],
    }).compile();

    service = module.get<TornadoService>(TornadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
