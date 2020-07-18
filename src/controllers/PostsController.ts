import { ConnectionOptionsReader, getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Post } from '../entity/Post';

//retorna os produtos da home page, produtos marcados como mais vendidos
export const post = async (req: Request, res: Response) => {
    const { id } = req.params;

    const posts = await getRepository(Post).findOne({
        where: {
            id
        }
    });
    
    return res.json(posts);
}