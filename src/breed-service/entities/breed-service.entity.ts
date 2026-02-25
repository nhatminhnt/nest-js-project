import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cat } from '../../apps/cat-service/entities/cat-service.entity';

@Entity({ name: 'breeds' })
export class Breed {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ name: 'origin_country', nullable: true })
  originCountry: string | null;

  @Column({ type: 'text', nullable: true })
  temperament: string | null;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @OneToMany(() => Cat, (cat: Cat) => cat.breed)
  cats: Cat[];
}
