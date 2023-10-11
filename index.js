import Express from 'express';
import usuarios from './usuarios.js';

const app = Express();
app.use(Express.json());

app.get('/', (req, res) => {
  res.send('Ok!');
});

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const usuario = usuarios[id];
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).send('not foud');
  }
});

app.post('/usuarios', (req, res) => {
  const usuario = req.body;
  console.log('body', usuario);
  usuarios.push(usuario);
  res.send('deu certo!');
});

app.listen(3000, () => {
  console.log('app listening on port 3000!');
});
