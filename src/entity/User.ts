import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Post } from '../entity/Post';
import { Comentario } from '../entity/Comentario'

@Entity('user')
export class User{
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("varchar")
  nome: string;
  
  @Column("varchar")
  email: string;
  
  @Column("varchar")
  senha: string;

  @Column("varchar", { nullable: true })
  caminho: string;

  @OneToMany(type => Post, post => post.user)
  posts: Post[];

  @ManyToMany(type => Post)
  @JoinTable()
  favoritos: Post[];

  @OneToMany(type => Comentario, comentario => comentario.user)
  comentarios: Comentario[];
}