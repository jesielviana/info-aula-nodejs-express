import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
const rotasDeUsuarios = Router();

const prisma = new PrismaClient();

rotasDeUsuarios.get('/usuarios', async (req, res) => {
  const usuarios = await prisma.usuario.findMany({});
  res.json(usuarios);
});

rotasDeUsuarios.get('/usuarios/:id', async (req, res) => {
  const id = req.params.id;
  const usuario = prisma.usuario.findUnique({ where: { id: id } });
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).send('not foud');
  }
});

rotasDeUsuarios.post('/usuarios', async (req, res) => {
  const usuario = req.body;
  await prisma.usuario.create({
    data: usuario,
  });
  res.send('deu certo!');
});

export default rotasDeUsuarios;
