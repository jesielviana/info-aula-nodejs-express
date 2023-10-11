import Express from 'express';
import rotasDeUsuarios from './rotas/rotasDeUsuarios.js';

const app = Express();
app.use(Express.json());

app.get('/', (req, res) => {
  res.send('Ok!');
});

app.use(rotasDeUsuarios);

app.listen(3000, () => {
  console.log('app listening on port 3000!');
});
