// import { PrismaClient } from '@prisma/client';
import usuarios from '../usuarios.js';

class ServicoUsuario {
  constructor() {
    // this.prisma = new PrismaClient();
  }

  async consultaTodos() {
    return usuarios;
  }

  consultaPorId(id) {
    return usuarios[id];
  }

  async add(usuario) {
    usuarios.push(usuario);
  }
}

export default ServicoUsuario;
