import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, FindOptionsWhere } from 'typeorm';
import { Tornado } from './tornado.entity';

@Injectable()
export class TornadoService {
  constructor(
    @InjectRepository(Tornado)
    private tornadoRepository: Repository<Tornado>,
  ) {}

  async create(data: Tornado | Tornado[]): Promise<Tornado | Tornado[]> {
    if (Array.isArray(data)) {
      return this.tornadoRepository.save(data);
    } else {
      return this.tornadoRepository.save(data);
    }
  }

  async findAll(query: any): Promise<Tornado[]> {
    const where: FindOptionsWhere<Tornado> = {};
    // State
    if (query.state) {
      where['st'] = query.state;
    }

    // Day
    if (query.day) {
      where['dy'] = query.day;
    }

    // Year
    if (query.year) {
      where['yr'] = query.year;
    }

    // Month
    if (query.month) {
      where['mo'] = query.month;
    }

    // Magnitude
    if (query.mag) {
      where['mag'] = query.mag;
    }

    // Injuries
    if (query.inj) {
      where['inj'] = query.inj;
    }

    // Date range filtering using startDate and endDate
    if (query.startDate && query.endDate) {
      where['date'] = Between(query.startDate, query.endDate);
    }

    return this.tornadoRepository.find({ where });
  }
}
