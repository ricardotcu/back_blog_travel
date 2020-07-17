import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User } from '../entity/User';

//LOGIN
export const login = async (req: Request, res: Response) => {
  const { email, senha} = req.body;
  const secret = "84edbc64b2e424f48fd21c08e26d9dd9";

  const user = await getRepository(User).find({
      where: {
          email
      }
  });
  
  if(user.length === 1){ 
      if(await bcrypt.compare(senha, user[0].senha)){
          const token = jwt.sign({ id: user[0].id }, secret, {
              expiresIn: '1d'
          });

          const data = {
              id: user[0].id,
              nome: user[0].nome,
              email: user[0].email,
              token
          }

          return res.json(data);
      }
      else{
          return res.status(404).json({message: 'user nao existe'});
      }
  }
  else{
      return res.status(404).json({message: 'erro ao logar'});
  }
  
}

//REGISTER
export const register = async (req: Request, res: Response) => {
  const { nome, sobrenome, email, senha, cargo, rg, cpf } = req.body;

  const senha_hash = await bcrypt.hash(senha, 8);

  const users = await getRepository(User).save({
      nome,
      sobrenome,
      email,
      senha: senha_hash,
      cargo,
      rg,
      cpf
  });
  return res.json(users);
  
}