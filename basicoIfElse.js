// criando variaveis para armazenar o nome e a quantidade de experiencia de um heroi,
//depois utilize uma estrutura de decisão para apresentar alguma das mensagens 
//correspondentes a cada situação.
// se xp for manor do que 1000= Ferro
// se xp for entre 1001 e 2000= Bronze
// se xp for entre 2001 e 3000= Prata
// se xp for entre 3001 e 5000= Platina
// se xp for entre 5001 e 9000= Ascedente
// se xp for entre 9001 e 10000= Imortal
// se xp for maior que 10000= Radiante
//ao final mostre " O Heroi de nome {nome} esta no nivel de {xp}"
let nome = "Gandalf";
let xp = 3000;      
let nivel;
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 3000) {
    nivel = "Prata";
} else if (xp >= 3001 && xp <= 5000) {
    nivel = "Platina";
} else if (xp >= 5001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}
console.log(`O Heroi de nome ${nome} esta no nivel de ${nivel}`);
