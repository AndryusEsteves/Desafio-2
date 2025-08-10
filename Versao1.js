// Desafio Calculadora de partidas Ranqueadas

function rankCalc (win , loss){
    let balance = (win - loss)
    let rank = ""
        if (win <= 10){
            rank = "Ferro"
                }   else if (win >= 11 && win <= 20) {
                    rank = "Bronze"
                }   else if (win >= 21 && win <= 50){
                    rank = "Prata"
                }   else if (win >= 51 && win <= 80){
                    rank = "Ouro"
                }   else if (win >= 81 && win <= 90){
                    rank = "Diamante"
                }   else if ( win >= 91 && win <= 100 ){
                    rank = "Lendário"
                }   else if (win >= 101){
                    rank = "Imortal"
                }
console.log(`O Herói tem saldo de ${balance} está no nível de ${rank}`)
}
    console.log("--- Iniciando testes da calculadora Rankeada ---")

    rankCalc(8, 2);
    rankCalc(20, 5);
    rankCalc(70, 20);
    rankCalc(99, 15);
    rankCalc(1000, 300);
