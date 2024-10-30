const vitorias = parseInt(prompt("Digite o número de vitórias:"));
const derrotas = parseInt(prompt("Digite o número de derrotas:"));

let saldo = vitorias - derrotas;

function calcularRank(saldo){
    let rank;
    if(saldo <= 10){
        rank = "Ferro"
    } else if(saldo <= 20){
        rank = "Bronze"
    } else if(saldo <= 50){
        rank = "Prata"
    } else if(saldo <= 80){
        rank = "Ouro"
    } else if(saldo <= 90){
        rank = "Diamante"
    } else if(saldo <= 100){
        rank = "Lendário"
    } else{
        rank = "Imortal"
    }
   console.log(`O Herói tem saldo de ${saldo} vitórias e está no ranque ${rank}`);
}

calcularRank(saldo);
