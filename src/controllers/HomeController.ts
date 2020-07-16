import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Post } from '../entity/Post';

//retorna os produtos da home page, produtos marcados como mais vendidos
export const getHome = async (req: Request, res: Response) => {

    const posts = await getRepository(Post).find();

    return res.json(posts);
}