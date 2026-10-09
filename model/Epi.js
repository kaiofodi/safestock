export class Epi {

    codigo;
    nome;
    CertificadoAprovacao;
    #quantidadeEstoque;

    constructor(codigo, nome, CertificadoAprovacao, quantidadeEstoque) {
        this.codigo = codigo;
        this.nome = nome;
        this.CertificadoAprovacao = CertificadoAprovacao;
        this.#quantidadeEstoque = quantidadeEstoque;
    }

    get codigo() {
        return this.codigo;
    }

    get nome() {
        return this.nome;
    }

    get CertificadoAprovacao() {
        return this.CertificadoAprovacao;
    }

    get quantidadeEstoque() {
        return this.#quantidadeEstoque;
    }

    adicionarQuantidadeEstoque(quantidade) {
        if (quantidade > 0) {
            this.#quantidadeEstoque += quantidade;
        }
    }
        retirarQuantidade(quantidade) {
            if (quantidade > 0 && quantidade <= this.#quantidadeEstoque) {
                this.#quantidadeEstoque -= quantidade;
                return true;
            }
            return false;
        }

}