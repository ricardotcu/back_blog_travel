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

  @OneToMany(type => Post, user => User)
  posts: Post[];

  @OneToMany(type => Favorito, user => User)
  favoritos: Favorito[];

  @OneToMany(type => Comentario, user => User)
  comentarios: Comentario[];
}