import { adicionarQuantidadeEstoque, retirarQuantidadeEstoque } from "./controller/epiController.js";
import { cadastrarEpiController, listarEpi, atualizarEpiController, excluirEpiController, buscarEpiPorIndiceController } from "./controller/epiController.js";

const resultadoEpi1 = cadastrarEpiController("EPI001", "Capacete", "CA12345", 50);
console.log(resultadoEpi1);

listarEpi();

const resultadoEpi2 = atualizarEpiController(0, "EPI002", "Luvas", "CA67890", 100);
console.log(resultadoEpi2);

const resultadoEpi3 = buscarEpiPorIndiceController(0, "EPI003", "Óculos de Proteção", "CA54321", 75);
console.log(resultadoEpi3);

const resultadoEpi4 = adicionarQuantidadeEstoque(0, 25);
console.log(resultadoEpi4);

const epi = buscarEpiPorIndiceController(0);
console.log("Estoque do EPI:", epi.quantidadeEstoque);

const resultadoEpi5 = retirarQuantidadeEstoque(0, 200);
console.log(resultadoEpi5);

const epiAtualizado = buscarEpiPorIndiceController(0);
console.log("Estoque do EPI após retirada:", epiAtualizado.quantidadeEstoque);

excluirEpiController(0);

listarEpi();


