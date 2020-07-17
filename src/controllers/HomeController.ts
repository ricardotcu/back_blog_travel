import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Post } from '../entity/Post';
import { User } from '../entity/User';

//retorna os produtos da home page, produtos marcados como mais vendidos
export const getHome = async (req: Request, res: Response) => {

    const posts = await getRepository(Post).find({ relations: ["user"] });

    return res.json(posts);
}

//retorna os produtos da home page, produtos marcados como mais vendidos
export const getusers = async (req: Request, res: Response) => {

    const posts = await getRepository(User).find();

    return res.json(posts);
}