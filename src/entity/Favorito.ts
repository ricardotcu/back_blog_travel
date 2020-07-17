import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../entity/User'

@Entity('favorito')
export class Favorito{
  @PrimaryGeneratedColumn("uuid")
  id: number;
  
  @Column("uuid")
  id_user: number;

  @ManyToOne(type => User, user => user.favoritos)
  user: User;
}