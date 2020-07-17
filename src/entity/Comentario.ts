import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Post } from '../entity/Post'
import { User } from '../entity/User'

@Entity('comentario')
export class Comentario{
  @PrimaryGeneratedColumn("uuid")
  id: number;
  
  @Column("varchar")
  descricao: string;

  @ManyToOne(type => Post, post => post.comentarios)
  post: Post;

  @ManyToOne(type => User, user => user.comentarios)
  user: User;
}