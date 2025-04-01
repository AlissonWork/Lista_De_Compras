
//Função de exclusao dos itens da lista.
export const editarItem = (elemento) => {
    //Aciona um prompt que pede a entrada de edição.
    let novoItem = prompt("Digite um novo item: ");

    //Verifica se o novo item não é vazio.
    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;

        const estavaComprado = elemento.querySelector(".input-checkbox").checked;

        //Identifica se a edição é na lista de comprados, para ser adicionada com a estilização correta.
        if (estavaComprado) {
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through";

        }
    }
}
