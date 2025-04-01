import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

//Função responsável por receber os inputs que serão adicionados a lista.
export function adicionarItem(evento) {
    evento.preventDefault();

    //Um alert caso seja tente adicionar um input vazio.
    if(item.value === ""){
        alert("Por favor, insira um item!");
        return;
    }

    //Cria o item da lista e adiciona dentro da lista de compras.
    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista);

    //Verificação da situação da lista apos a adição de um novo item.
    verificarListaVazia(listaDeCompras);
    item.value = "";

}
