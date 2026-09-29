import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('emprendedores')
export class Emprendedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  rubro: string;

  @Column({ length: 100 })
  comuna: string;

  @Column({ length: 20, nullable: true })
  telefono: string;

  @Column({ length: 150, nullable: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ default: true })
  activo: boolean;
}