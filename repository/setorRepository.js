
import { Setor } from "../model/Setor.js";

const setores = [];

// Cadastrar setor
export function cadastrar(setor) {
    setores.push(setor);
    return setor;
}

// Listar todos os setores
export function listar() {
    return setores;
}

// Buscar setor pelo índice
export function buscarPorIndice(indice) {
    return setores[indice];
}

// Atualizar somente os campos enviados
export function atualizar(indice, dadosAtualizados) {
    const setor = setores[indice];

    if (!setor) {
        return null;
    }

    Object.assign(setor, dadosAtualizados);

    return setor;
}

// Excluir setor
export function excluir(indice) {
    if (!setores[indice]) {
        return null;
    }

    return setores.splice(indice, 1)[0];
}
