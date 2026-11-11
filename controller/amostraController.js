
import { Amostra } from "../model/Amostra.js";

import {
    cadastrar,
    listar,
    buscarPorIndice,
    excluir
} from "../repository/amostraRepository.js";

export function cadastrarAmostra(req, res) {
    const { codigo, descricao, origem, status } = req.body;

    const novaAmostra = new Amostra(
        codigo,
        descricao,
        origem,
        status
    );

    cadastrar(novaAmostra);

    return res.status(201).json(novaAmostra);
}

export function listarAmostras(req, res) {
    return res.status(200).json(listar());
}

export function buscarAmostra(req, res) {
    const indice = Number(req.params.indice);

    const amostra = buscarPorIndice(indice);

    if (!Number.isInteger(indice) || indice < 0 || !amostra) {
        return res.status(404).json({
            mensagem: "Amostra não encontrada."
        });
    }

    return res.status(200).json(amostra);
}

export function excluirAmostra(req, res) {
    const indice = Number(req.params.indice);

    if (!Number.isInteger(indice) || indice < 0) {
        return res.status(404).json({
            mensagem: "Amostra não encontrada."
        });
    }

    const amostraRemovida = excluir(indice);

    if (!amostraRemovida) {
        return res.status(404).json({
            mensagem: "Amostra não encontrada."
        });
    }

    return res.status(200).json({
        mensagem: "Amostra excluída com sucesso.",
        amostra: amostraRemovida
    });
}
