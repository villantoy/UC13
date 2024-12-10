import Joi from "joi";

export const modeloCarro = Joi.object({
    nome: Joi.string().min(3).required(),
    sigla: Joi.string().length(3).required(),
    potencia: Joi.number().min(1).required(),
    velocidadeMaxima: Joi.number().min(1).required(),
    consumo: Joi.number().min(0.1).required(),
    aceleracao: Joi.number().min(0).required(),
    preco: Joi.number().min(0).required(),
});

export const modeloAtualizacaoCarro = Joi.object({
    nome: Joi.string().min(3),
    sigla: Joi.string().length(3),
    potencia: Joi.number().min(1),
    velocidadeMaxima: Joi.number().min(1),
    consumo: Joi.number().min(0.1),
    aceleracao: Joi.number().min(0),
    preco: Joi.number().min(0),
}).min(1);