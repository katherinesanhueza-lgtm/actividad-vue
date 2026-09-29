import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateEmprendedorDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @IsIn([
    'Tecnología',
    'Gastronomía',
    'Comercio',
    'Servicios',
    'Turismo',
    'Artesanía',
    'Otro',
  ])
  rubro: string;

  @IsString()
  @IsNotEmpty()
  comuna: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(10)
  descripcion?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}