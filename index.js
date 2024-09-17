let vitorias = calcularPartida(100,5)
let nivel = classificRanke(vitorias)
let partidas = 50;
function calcularPartida(vitoria, derrota){
    return vitoria - derrota
}

function classificRanke(vitorias){
   if(vitorias < 10 ){
    return "Ferro";
   }else if( vitorias > 10 && vitorias <=20){
    return "Bronze"
   }else if( vitorias > 20 && vitorias <=50){
    return "Prata"
   }else if( vitorias > 50 && vitorias <=80){
    return "Ouro"
   }else if( vitorias > 80 && vitorias <=90){
    return "Diamante"
   }else if( vitorias > 90 && vitorias <=100){
    return "Lendário"
   }else if( vitorias > 101){
    return "Imortal"
   }

}

console.log(`O Herói tem de saldo de ${vitorias} está no nível de ${nivel}`)