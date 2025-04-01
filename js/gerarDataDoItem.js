//Função que gera a data e hora de cada item da lista.
export function gerarDataDoItem(){
    return `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()})
     às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;
}
