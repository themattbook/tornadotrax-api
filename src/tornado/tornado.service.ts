import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, In, FindOptionsWhere } from 'typeorm';
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

    // Handle both single and multiple states
    if (query.state) {
      // Check if `state` query parameter contains comma, indicating multiple states
      if (query.state.includes(',')) {
        // Split the `state` query by commas and trim spaces
        const states = query.state.split(',').map((s: string) => s.trim());
        where['st'] = In(states); // Use the `In` operator for multiple values
      } else {
        where['st'] = query.state; // Single state, direct assignment
      }
    }

    if (query.day) {
      where['dy'] = query.day;
    }

    if (query.year) {
      where['yr'] = query.year;
    }

    if (query.month) {
      where['mo'] = query.month;
    }

    // EF-Rating
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
