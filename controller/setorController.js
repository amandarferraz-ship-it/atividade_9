
import { Setor } from "../model/Setor.js";

import {
    cadastrar,
    listar,
    buscarPorIndice,
    atualizar,
    excluir
} from "../repository/setorRepository.js";

// Cadastrar setor
export function cadastrarSetor(req, res) {
    const { nome, sigla, responsavel, ramal } = req.body;

    const novoSetor = new Setor(
        nome,
        sigla,
        responsavel,
        ramal
    );

    cadastrar(novoSetor);

    return res.status(201).json(novoSetor);
}

// Listar setores
export function listarSetores(req, res) {
    return res.status(200).json(listar());
}

// Buscar setor
export function buscarSetor(req, res) {
    const indice = Number(req.params.indice);

    if (!Number.isInteger(indice) || indice < 0) {
        return res.status(404).json({
            mensagem: "Setor não encontrado."
        });
    }

    const setor = buscarPorIndice(indice);

    if (!setor) {
        return res.status(404).json({
            mensagem: "Setor não encontrado."
        });
    }

    return res.status(200).json(setor);
}

// Atualizar setor parcialmente
export function atualizarSetor(req, res) {
    const indice = Number(req.params.indice);

    if (!Number.isInteger(indice) || indice < 0) {
        return res.status(404).json({
            mensagem: "Setor não encontrado."
        });
    }

    const setorExistente = buscarPorIndice(indice);

    if (!setorExistente) {
        return res.status(404).json({
            mensagem: "Setor não encontrado."
        });
    }

    const camposPermitidos = [
        "nome",
        "sigla",
        "responsavel",
        "ramal"
    ];

    const dadosAtualizados = {};

    for (const campo of camposPermitidos) {
        if (req.body[campo] !== undefined) {
            dadosAtualizados[campo] = req.body[campo];
        }
    }

    const setorAtualizado = atualizar(
        indice,
        dadosAtualizados
    );

    return res.status(200).json(setorAtualizado);
}

// Excluir setor
export function excluirSetor(req, res) {
    const indice = Number(req.params.indice);

    if (!Number.isInteger(indice) || indice < 0) {
        return res.status(404).json({
            mensagem: "Setor não encontrado."
        });
    }

    const setorRemovido = excluir(indice);

    if (!setorRemovido) {
        return res.status(404).json({
            mensagem: "Setor não encontrado."
        });
    }

    return res.status(200).json({
        mensagem: "Setor excluído com sucesso.",
        setor: setorRemovido
    });
}
