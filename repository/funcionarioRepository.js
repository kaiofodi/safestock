const funcionarios = [];

export function cadastrarFuncionario(Funcionario){
    funcionarios.push(Funcionario);
};

export function listarFuncionarios(){
    return funcionarios;
};

export function buscarFuncionarioPorIndice(indice){
    return funcionarios[indice]; 
};

export function atualizarFuncionario(indice, Funcionario){
    funcionarios[indice] = Funcionario;
};

export function excluirFuncionario(indice){
    funcionarios.splice(indice, 1);
};