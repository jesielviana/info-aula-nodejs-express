import { Router } from 'express';
import ServicoUsuario from '../servicos/ServicoUsuario.js';
const rotasDeUsuarios = Router();

const servicoUsuario = new ServicoUsuario();

rotasDeUsuarios.get('/usuarios', async (req, res) => {
  const usuarios = await servicoUsuario.consultaTodos();
  res.json(usuarios);
});

rotasDeUsuarios.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const usuario = servicoUsuario.consultaPorId(id);
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).send('not foud');
  }
});

rotasDeUsuarios.post('/usuarios', async (req, res) => {
  const usuario = req.body;
  console.log('body', usuario);
  await servicoUsuario.add(usuario);
  res.send('deu certo!');
});

export default rotasDeUsuarios;
