import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { EmprendedoresService } from './emprendedores.service.js';
import { CreateEmprendedorDto } from './dto/create-emprendedor.dto.js';
import { UpdateEmprendedorDto } from './dto/update-emprendedor.dto.js';

@ApiTags('emprendedores')
@Controller('emprendedores')
export class EmprendedoresController {
  constructor(
    private readonly emprendedoresService: EmprendedoresService,
  ) {}

  @Get()
  findAll() {
    return this.emprendedoresService.findAll();
  }

  @Get('buscar')
  buscar(
    @Query('comuna') comuna?: string,
    @Query('rubro') rubro?: string,
  ) {
    return this.emprendedoresService.buscar(comuna, rubro);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emprendedoresService.findOne(Number(id));
  }

  @Post()
  create(@Body() createEmprendedorDto: CreateEmprendedorDto) {
    return this.emprendedoresService.create(createEmprendedorDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmprendedorDto: UpdateEmprendedorDto,
  ) {
    return this.emprendedoresService.update(
      Number(id),
      updateEmprendedorDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emprendedoresService.remove(Number(id));
  }
}