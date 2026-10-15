import { Funcionario } from '../model/Funcionario.js';
import { cadastrarFuncionario, listarFuncionarios, atualizarFuncionario, excluirFuncionario, buscarFuncionarioPorIndice } from '../repository/funcionarioRepository.js';

export function cadastrarFuncionarioController(matricula, nome,setor, cargo) {
    const funcionario = new Funcionario(matricula, nome, setor,cargo);

    cadastrarFuncionario(funcionario);
    return "Funcionário cadastrado com sucesso";
}

export function listarFuncionarioController() {
    const lista = listarFuncionarios();
    console.log(lista);
}

export function atualizarFuncionarioController(indice, matricula, nome, setor, cargo) {
    const funcionario = new Funcionario(matricula, nome, setor, cargo);
    atualizarFuncionario(indice, funcionario);
    return "Funcionário atualizado com sucesso";
}

export function excluirFuncionarioController(indice) {
    excluirFuncionario(indice);
    return "Funcionário excluído com sucesso";
}

export function buscarFuncionarioPorIndiceController(indice) {
    const funcionario = buscarFuncionarioPorIndice(indice);
    console.log(funcionario);
    return funcionario;
}
