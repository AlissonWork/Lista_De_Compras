import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");

//Função de exclusao dos itens da lista.
const excluirItem = (elemento) => {
    let comfirmacao = confirm("Tem certeza que deseja excluir o item?");

    //Exclui o item da lista caso o alert seja confirmado
    if (comfirmacao) {
        elemento.remove();

        verificarListaVazia(listaDeCompras);
    }

}

export { excluirItem };
