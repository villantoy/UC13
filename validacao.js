import Joi from "joi";


export const modeloCarro = Joi.object({
    nome: Joi.string().min(3).required().message({
        'string.min': 'O nome do carro deve ter pelo menos 3 caracteres.',
        'any.required': 'O nome do carro é Obrigatorio.',
    }),
    sigla: Joi.string().length(3).required().message({
        'string.length':'A sigla deve ter exatamente 3 caracteres.',
        'any.required':'A sigla é obrigatoria.',
    }),
    potencia: Joi.number().min(1).required().message({
        'number.min':'A Potencia deve ser maior ou igual a 1.',
        'any.required':'A Potencia é obrigatorio.',
    }),
    velocidadeMaxima: Joi.number().min(1).required().message({
        'number.min':'A velocidade maxima deve ser maior ou igual a 1.',
        'any.required':'A Velocidade Maxima é obrigatoria.',
    }),
    consumo: Joi.number().min(0.1).required().message({
        'number.min':'O consumo deve ser maior ou igual a o.1.',
        'any.required':'O Consumo é obrigatorio.',
    }),
    aceleracao: Joi.number().min(0).required().message({
        'number.min':'A Aceleração deve ser maior ou igual a 0.',
        'any.required':'A Aceleração é obrigatoria.',
    }),
    preco: Joi.number().min(0).required().message({
        'number.min':'O preco deve ser maior ou igual a 1.',
        'any.required':'O Preco é obrigatorio.',
    })
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