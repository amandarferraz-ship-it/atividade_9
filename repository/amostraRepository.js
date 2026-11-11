
const amostras = [];

export function cadastrar(amostra) {
    amostras.push(amostra);
    return amostra;
}

export function listar() {
    return amostras;
}

export function buscarPorIndice(indice) {
    return amostras[indice];
}

export function excluir(indice) {
    if (amostras[indice] === undefined) {
        return null;
    }

    return amostras.splice(indice, 1)[0];
}
