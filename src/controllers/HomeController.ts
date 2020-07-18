import { ConnectionOptionsReader, getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Post } from '../entity/Post';
import { User } from '../entity/User';

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

    const posts = await getRepository(User).find();

    return res.json(posts);
}