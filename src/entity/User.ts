import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Post } from '../entity/Post';
import { Favorito } from '../entity/Favorito'
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

  @OneToMany(type => Favorito, favorito => favorito.user)
  favoritos: Favorito[];

  @OneToMany(type => Comentario, comentario => comentario.user)
  comentarios: Comentario[];
}