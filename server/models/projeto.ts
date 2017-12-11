import * as mongoose from 'mongoose';

const projetoSchema = new mongoose.Schema({
  projetoDestino: String,
  nome: String,
  tipo: String,
  assinatura:String
});

const Projeto = mongoose.model('Projeto', projetoSchema);

export default Projeto;
