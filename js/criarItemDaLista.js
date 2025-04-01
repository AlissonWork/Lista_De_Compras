import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { gerarDataDoItem } from "./gerarDataDoItem.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
let contador = 0;

export function criarItemDaLista(item) {
    // Cria um novo elemento <li> para representar o item da lista
    const itemDaLista = document.createElement("li");
    // Cria um container para organizar o conteúdo do item
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");

    // Container para nome e checkbox
    const containerNomeItem = document.createElement("div");

    // Container para checkbox personalizado
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");

    // Criação do input checkbox
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("input-checkbox");
    checkboxInput.id = "checkbox-" + contador++;

    // Criação do label associado ao checkbox
    const checkboxLabel = document.createElement("label");
    checkboxInput.setAttribute("for", checkboxInput.id);

    // Adiciona evento de clique ao label para mover itens entre listas de compras e comprado
    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");
        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }
    });

    // Criação do checkbox customizado
    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    // Monta o checkbox dentro do label
    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    // Adiciona o checkbox ao container
    containerCheckbox.appendChild(checkboxLabel);
    containerNomeItem.appendChild(containerCheckbox);

    // Cria o elemento para exibir o nome do item
    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item;
    containerNomeItem.appendChild(nomeDoItem);

    // Criação do container dos botões (editar e remover)
    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    const botaoEdicao = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");
    botaoEdicao.classList.add("item-lista-button");

    // Criação das imagens para os botões
    const imagemRemover = document.createElement("img");
    const imagemEditar = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    // Evento para do botao para remover item
    botaoRemover.addEventListener("click", function () {
        excluirItem(itemDaLista);
    })

    // Evento para do botao para editar item
    botaoEdicao.addEventListener("click", function () {
        editarItem(itemDaLista);
    })

    // Adiciona imagens aos botões
    botaoRemover.appendChild(imagemRemover);
    botaoEdicao.appendChild(imagemEditar);

    // Adiciona botões ao container
    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEdicao);

    // Monta a estrutura final do item da lista
    containerItemLista.appendChild(containerNomeItem);
    containerItemLista.appendChild(containerBotoes);

    // Cria um elemento para exibir a data do item
    const itemData = document.createElement("p");
    itemData.innerText = gerarDataDoItem();
    itemData.classList.add("texto-data");

    // Adiciona os elementos ao item da lista
    itemDaLista.appendChild(containerItemLista);
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}