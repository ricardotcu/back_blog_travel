import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../entity/User'
import { Comentario} from '../entity/Comentario'

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("varchar")
  titulo: string;
  
  @Column("varchar")
  descricao: string;

  @Column("varchar")
  caminho: string;

  @ManyToOne(type => User, posts => Post)
  user: User;

  @OneToMany(type => Comentario, post => Post)
  comentarios: Comentario[];
   
}