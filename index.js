let heroi = "Batman"
let quantidadeDeXp = 7001

let nivel = ""

if (quantidadeDeXp <= 1000) {
nivel = "Ferro"
} else if (quantidadeDeXp <= 2000) {
nivel = "Bronze"
} else if (quantidadeDeXp <= 5000) {
nivel = "Prata"
} else if (quantidadeDeXp <= 7000) {
nivel = "Ouro"
} else if (quantidadeDeXp <= 8000) {
nivel = "Platina"
} else if (quantidadeDeXp <= 9000) {
nivel = "Ascendente"
} else if (quantidadeDeXp <= 10000) {
nivel = "Imortal"
} else {
nivel = "Radiante"
}
console.log ("O herói de nome " + heroi + " está no nível " + nivel)