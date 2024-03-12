import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TornadoService } from './tornado.service';
import { TornadoController } from './tornado.controller';
import { Tornado } from './tornado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tornado])],
  providers: [TornadoService],
  controllers: [TornadoController],
})
export class TornadoModule {}
