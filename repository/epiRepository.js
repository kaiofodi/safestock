const epis = [];

export function cadastrarEpi(Epi){
    epis.push(Epi);
}

export function listar(){
    return epis;
}

export function buscarEpiPorIndice(indice){
    epis[indice];
    return epis[indice]; 
}

export function atualizarEpi(indice, Epi){
    epis[indice] = Epi;
}

export function excluirEpi(indice){
    epis.splice(indice, 1);
}