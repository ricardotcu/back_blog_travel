import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

//retorna os produtos da home page, produtos marcados como mais vendidos
export const getHome = async (req: Request, res: Response) => {

    //const destaques = await getRepository().find();

    return res.json({destaques: 'oie mundo'});
}