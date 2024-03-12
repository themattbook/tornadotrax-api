import { Test, TestingModule } from '@nestjs/testing';
import { TornadoController } from './tornado.controller';

describe('TornadoController', () => {
  let controller: TornadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TornadoController],
    }).compile();

    controller = module.get<TornadoController>(TornadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
