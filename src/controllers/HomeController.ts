import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Post } from '../entity/Post';
import { User } from '../entity/User';
import { Comentario } from '../entity/Comentario';

//retorna os produtos da home page, produtos marcados como mais vendidos
export const home = async (req: Request, res: Response) => {

    const posts = await getRepository(Post).find(
        {
            relations: ["user", "comentarios"],
            select: ["id", "titulo", "descricao", "caminho"]
        });
    
    return res.json(posts);
}

//retorna os produtos da home page, produtos marcados como mais vendidos
export const users = async (req: Request, res: Response) => {

    const users = await getRepository(User).find(
        {
            select: ["id", "nome", "email", "caminho"],
            relations: ["posts", "comentarios", "favoritos"]
        });

    return res.json(users);
}

//retorna os produtos da home page, produtos marcados como mais vendidos
export const comentarios = async (req: Request, res: Response) => {

    const users = await getRepository(Comentario).find(
        {
            select: ["id", "descricao"],
            relations: ["post", "user"]
        });

    return res.json(users);
}

//retorna os produtos da home page, produtos marcados como mais vendidos
export const favoritos = async (req: Request, res: Response) => {
    
}