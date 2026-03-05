import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cat } from '../../cat/entities/cat.entity';

@Entity({ name: 'breeds' })
export class Breed {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ name: 'origin_country', type: 'varchar', nullable: true })
  originCountry: string | null;

  @Column({ type: 'text', nullable: true })
  temperament: string | null;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @OneToMany(() => Cat, (cat: Cat) => cat.breed)
  cats: Cat[];
}
