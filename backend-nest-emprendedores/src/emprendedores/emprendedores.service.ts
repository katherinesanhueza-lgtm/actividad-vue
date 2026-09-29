import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Emprendedor } from './entities/emprendedor.entity.js';
import { CreateEmprendedorDto } from './dto/create-emprendedor.dto.js';
import { UpdateEmprendedorDto } from './dto/update-emprendedor.dto.js';

@Injectable()
export class EmprendedoresService {
  constructor(
    @InjectRepository(Emprendedor)
    private readonly emprendedoresRepository: Repository<Emprendedor>,
  ) {}

  async findAll(): Promise<Emprendedor[]> {
    return await this.emprendedoresRepository.find();
  }

  async buscar(
    comuna?: string,
    rubro?: string,
  ): Promise<Emprendedor[]> {
    const query =
      this.emprendedoresRepository.createQueryBuilder('emprendedor');

    if (comuna) {
      query.andWhere('emprendedor.comuna = :comuna', {
        comuna,
      });
    }

    if (rubro) {
      query.andWhere('emprendedor.rubro = :rubro', {
        rubro,
      });
    }

    return await query.getMany();
  }

  async findOne(id: number): Promise<Emprendedor> {
    const emprendedor =
      await this.emprendedoresRepository.findOne({
        where: { id },
      });

    if (!emprendedor) {
      throw new NotFoundException({
        error: 'Emprendedor no encontrado',
      });
    }

    return emprendedor;
  }

  async create(
    createEmprendedorDto: CreateEmprendedorDto,
  ): Promise<Emprendedor> {
    const emprendedor =
      this.emprendedoresRepository.create(
        createEmprendedorDto,
      );

    return await this.emprendedoresRepository.save(emprendedor);
  }

  async update(
    id: number,
    updateEmprendedorDto: UpdateEmprendedorDto,
  ): Promise<Emprendedor> {
    const emprendedor = await this.findOne(id);

    Object.assign(emprendedor, updateEmprendedorDto);

    return await this.emprendedoresRepository.save(emprendedor);
  }

  async remove(id: number): Promise<{ ok: boolean }> {
    const emprendedor = await this.findOne(id);

    await this.emprendedoresRepository.remove(emprendedor);

    return { ok: true };
  }
}