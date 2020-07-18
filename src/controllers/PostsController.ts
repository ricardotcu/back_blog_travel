import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Post } from '../entity/Post';

//retorna os produtos da home page, produtos marcados como mais vendidos
export const post = async (req: Request, res: Response) => {
    const { id } = req.params;

    const post = await getRepository(Post).findOne({
        relations: ["user", "comentarios"],
        select: ["id", "titulo", "descricao", "caminho"],
        where: {
            id
        }
    });
    
    return res.json(post);
}