import carros2024 from './tabelacarros.js';
import express from 'express';

import { modeloCarro, modeloAtualizacaoCarro } from './validacao.js';

const app = express();

app.use(express.json());

app.get('/', (requisicao, resposta) => {
    resposta.status(200).send(carros2024);
});

app.get('/:sigla', (requisicao, resposta) => {
    const siglaInformada = requisicao.params.sigla.toUpperCase(); // Obtendo a Sigla
    const carro = carros2024.find((infoCarro) => infoCarro.sigla === siglaInformada); // Busca o carro pela sigla
    if (!carro) {
        // ! Vazio Not
        // Se o carro não for enctrado, retorna erro 404
        resposta
        .status(404)
        .send(
            'Não existe um carro com a sigla informada!' //Mensagem de erro
        );
    return;
    }
    resposta.status(200).send(carro); // Se encontrado a sigla retorna a resposta correta
});

app.post('/', (req, res) => {
    const novoCarro = req.body; // Obtém o corpo enviado para incluir um carro
    // JOI
    const { error } = modeloCarro.validate(novoCarro);
    if (error) {
        res.status(400).send(error);
        return;
    }
    carros2024.push(novoCarro); // Adiciona o novo carro à lista de carros.
    res.status(201).send(novoCarro); // Retorna o carro adicionado com status 201 (Ok).
});

app.put('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const carroSelecionado = carros2024.find(c => c.sigla === siglaInformada);
    if (!carroSelecionado) {
        res
         .status(404)
         .send(
            'Não existe um carro com a sigla informada, digite novamente ou volte amanhã!'
         );
         return;
    };
    // JOI
    const { error } = modeloAtualizacaoCarro.validate(req.body)
    if (error){
        res.status(400).send(error);
        return;
    }

    const campos = Object.keys(req.body);
    for (let campo of campos) {
        carroSelecionado[campo] = req.body[campo];
    }
    res.status(200).send(carroSelecionado);
});

app.delete('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const IndiceCarroSelecionado = carros2024.findIndex(
        (c) => c.sigla === siglaInformada);
    if (IndiceCarroSelecionado === -1) {
        res
         .status(404)
         .send(
            'Não existe um carro com a sigla informada, digite novamente ou tente mais tarde'
         );
         return;
    };
    const carroRemovido = carros2024.splice(IndiceCarroSelecionado, 1);
    res.status(200).send(carroRemovido);
});



// Inicia o servidor na porta 3000:
app.listen(3000,() => console.log("Servidor Rodando com Sucesso"));

// node app.js
// localhost:3000/