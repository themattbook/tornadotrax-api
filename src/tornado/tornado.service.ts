import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, FindOptionsWhere } from 'typeorm';
import { Tornado } from './tornado.entity';

interface FindAllTornadoResponse {
  data: Tornado[];
  total_entries: number;
  timestamp: Date;
}

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

  async findAll(query: any): Promise<FindAllTornadoResponse> {
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

    const data = await this.tornadoRepository.find({ where });
    const total_entries = await this.tornadoRepository.count({ where });
    const timestamp = new Date(); // Current timestamp

    return { data, total_entries, timestamp };
  }
}
