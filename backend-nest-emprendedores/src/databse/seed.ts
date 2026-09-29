import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

import { Emprendedor } from '../emprendedores/entities/emprendedor.entity.js';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'emprendedores_db',
  entities: [Emprendedor],
  synchronize: true,
});

const emprendedoresIniciales = [
  {
    nombre: 'TecnoÑuble',
    rubro: 'Tecnología',
    comuna: 'Chillán',
    telefono: '987654321',
    email: 'contacto@tecnonuble.cl',
    descripcion: 'Servicios tecnológicos para empresas y particulares.',
    activo: true,
  },
  {
    nombre: 'Sabores de Ñuble',
    rubro: 'Gastronomía',
    comuna: 'Chillán Viejo',
    telefono: '976543210',
    email: 'contacto@saboresdenuble.cl',
    descripcion: 'Elaboración de productos gastronómicos artesanales.',
    activo: true,
  },
  {
    nombre: 'Comercial San Carlos',
    rubro: 'Comercio',
    comuna: 'San Carlos',
    telefono: '965432109',
    email: 'contacto@comercialsancarlos.cl',
    descripcion: 'Venta de productos y artículos para el hogar.',
    activo: true,
  },
  {
    nombre: 'Servicios Bulnes',
    rubro: 'Servicios',
    comuna: 'Bulnes',
    telefono: '954321098',
    email: 'contacto@serviciosbulnes.cl',
    descripcion: 'Servicios generales para hogares y pequeñas empresas.',
    activo: true,
  },
  {
    nombre: 'Turismo Yungay',
    rubro: 'Turismo',
    comuna: 'Yungay',
    telefono: '943210987',
    email: 'contacto@turismoyungay.cl',
    descripcion: 'Experiencias turísticas y recorridos por la zona.',
    activo: true,
  },
  {
    nombre: 'Artesanías Quirihue',
    rubro: 'Artesanía',
    comuna: 'Quirihue',
    telefono: '932109876',
    email: 'contacto@artesaniasquirihue.cl',
    descripcion: 'Creación y comercialización de artesanías locales.',
    activo: true,
  },
  {
    nombre: 'Digital Coihueco',
    rubro: 'Tecnología',
    comuna: 'Coihueco',
    telefono: '921098765',
    email: 'contacto@digitalcoihueco.cl',
    descripcion: 'Desarrollo de soluciones digitales para emprendedores.',
    activo: true,
  },
  {
    nombre: 'Mercado Pinto',
    rubro: 'Comercio',
    comuna: 'Pinto',
    telefono: '910987654',
    email: 'contacto@mercadopinto.cl',
    descripcion: 'Comercialización de productos locales y artesanales.',
    activo: true,
  },
];

async function seed() {
  try {
    await AppDataSource.initialize();

    console.log('Conexión a MySQL establecida.');

    const repository =
      AppDataSource.getRepository(Emprendedor);

    const cantidad = await repository.count();

    if (cantidad > 0) {
      console.log(
        'La tabla ya contiene emprendedores. No se insertaron datos duplicados.',
      );

      await AppDataSource.destroy();
      return;
    }

    const emprendedores = repository.create(
      emprendedoresIniciales,
    );

    await repository.save(emprendedores);

    console.log('Seed ejecutado correctamente.');
    console.log(
      `${emprendedores.length} emprendedores fueron insertados.`,
    );

    await AppDataSource.destroy();
  } catch (error) {
    console.error('Error al ejecutar el seed:', error);
    process.exit(1);
  }
}

seed();