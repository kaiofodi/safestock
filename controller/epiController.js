import { Epi } from "../model/Epi.js";
import { cadastrarEpi, listar, atualizarEpi, excluirEpi, buscarEpiPorIndice } from "../repository/epiRepository.js";

export function cadastrarEpiController(codigo, nome, CertificadoAprovacao, quantidadeEstoque) {
    const epi = new Epi(codigo, nome, CertificadoAprovacao, quantidadeEstoque);
    
    cadastrarEpi(epi);

    return "EPI cadastrado com sucesso";
}

export function listarEpi(){
    const lista = listar();

    console.log(lista);
}

export function atualizarEpiController(indice, codigo, nome, CertificadoAprovacao, quantidadeEstoque){
    const epi = new Epi(codigo, nome, CertificadoAprovacao, quantidadeEstoque);
    
    atualizarEpi(indice, epi);

    return "EPI atualizado com sucesso";
}

export function excluirEpiController(indice){
    excluirEpi(indice);
}

export function buscarEpiPorIndiceController(indice){
    const epi = buscarEpiPorIndice(indice);
    console.log(epi);
    return epi;
}

export function adicionarQuantidadeEstoque(indice, quantidade) {
    const epi = buscarEpiPorIndice(indice);
    epi.adicionarQuantidadeEstoque(quantidade);
    return "Quantidade de estoque atualizada com sucesso";
}

export function retirarQuantidadeEstoque(indice, quantidade) {
    const epi = buscarEpiPorIndice(indice);
    const sucesso = epi.retirarQuantidade(quantidade);
    if (sucesso) {
        return "Quantidade de estoque atualizada com sucesso";
    }
    return "Não foi possível retirar a quantidade solicitada";
}
