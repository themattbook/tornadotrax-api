import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { TornadoService } from './tornado.service';
import { Tornado } from './tornado.entity';

@Controller('tornado')
export class TornadoController {
  constructor(private readonly tornadoService: TornadoService) {}

  @Post()
  create(@Body() tornadoData: Tornado | Tornado[]) {
    return this.tornadoService.create(tornadoData);
  }

  @Get()
  async findAll(
    @Query() query: any,
  ): Promise<{ data: Tornado[]; total_entries: number; timestamp: Date }> {
    return await this.tornadoService.findAll(query);
  }
}
