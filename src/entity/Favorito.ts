import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { User } from '../entity/User'
import { Post } from '../entity/Post'

@Entity('favorito')
export class Favorito{
  @PrimaryGeneratedColumn("uuid")
  id: number;
  
  @Column("uuid")
  id_user: number;
  
  @ManyToMany(type => Post)
  @JoinTable()
  posts: Post[];

  @ManyToOne(type => User, user => user.favoritos)
  user: User;
}