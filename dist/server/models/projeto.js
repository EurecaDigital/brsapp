"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var projetoSchema = new mongoose.Schema({
    projetoDestino: String,
    nome: String,
    tipo: String,
    assinatura: String
});
var Projeto = mongoose.model('Projeto', projetoSchema);
exports.default = Projeto;
//# sourceMappingURL=projeto.js.map