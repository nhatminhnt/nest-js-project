import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cat } from '../../cat/entities/cat.entity';

@Entity({ name: 'cat_images' })
export class CatImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Cat, (cat) => cat.images, { onDelete: 'CASCADE' })
  cat: Cat;

  @Column({ name: 'image_url' })
  imageUrl: string;

  @Column({ name: 'is_thumbnail', default: false })
  isThumbnail: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
