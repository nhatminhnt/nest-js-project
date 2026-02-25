import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CatStatus } from '../../../libs/common/enums';
import { Breed } from '../../../breed-service/entities/breed-service.entity';
import { CatImage } from '../../../cat-image-service/entities/cat-image.entity';
import { CartItem } from '../../../cart-service/entities/cart-item.entity';

@Entity({ name: 'cats' })
export class Cat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Breed, (breed) => breed.cats, { nullable: false })
  breed: Breed;

  @Column()
  gender: string;

  @Column()
  color: string;

  @Column({ name: 'date_of_birth', type: 'date', nullable: true })
  dateOfBirth: Date | null;

  @Column({ type: 'numeric' })
  price: number;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({
    type: 'enum',
    enum: CatStatus,
    default: CatStatus.AVAILABLE,
  })
  status: CatStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;

  @OneToMany(() => CatImage, (img) => img.cat)
  images: CatImage[];

  @OneToMany(() => CartItem, (item) => item.cat)
  cartItems: CartItem[];
}
