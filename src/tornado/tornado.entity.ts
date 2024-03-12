import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tornado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  om: string;

  @Column()
  yr: string;

  @Column()
  mo: string;

  @Column()
  dy: string;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  tz: string;

  @Column()
  st: string;

  @Column()
  stf: string;

  @Column()
  stn: string;

  @Column()
  mag: string;

  @Column()
  inj: string;

  @Column()
  fat: string;

  @Column()
  loss: string;

  @Column()
  closs: string;

  @Column()
  slat: string;

  @Column()
  slon: string;

  @Column()
  elat: string;

  @Column()
  elon: string;

  @Column()
  len: string;

  @Column()
  wid: string;

  @Column()
  ns: string;

  @Column()
  sn: string;

  @Column()
  sg: string;

  @Column()
  f1: string;

  @Column()
  f2: string;

  @Column()
  f3: string;

  @Column()
  f4: string;

  @Column()
  fc: string;
}
