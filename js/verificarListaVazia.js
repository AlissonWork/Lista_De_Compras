const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");

//Função que verifica a existencia de itens dentro da lista.
export function verificarListaVazia(lista){

    //Não possuindo um li ou seja um item, a mensagem é exibida informando que a lista esta vazia.
    if(lista.querySelectorAll("li").length === 0){
        mensagemListaVazia.style.display = "block";
    
    //Se a lista possuir algum item a mensaem fica indisponível.
    } else {
        mensagemListaVazia.style.display = "none";
    }
}