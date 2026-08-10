const guerreiro = {
nome: "Thorin",
vida: 60,
ataque: 20,

causaDano: function(personagem){
personagem.recebeDano(this.ataque)
},
recebeDano: function(quantidade){
this.vida = this.vida - quantidade
}

}

const mago = {
nome: "Gandalfe",
vida: 60,
ataque: 35,

causaDano: function(personagem){
personagem.recebeDano(this.ataque)
},

recebeDano: function(quantidade){
this.vida = this.vida - quantidade
}
}
const arqueiro = {
nome: "Legolas",
vida: 80,
ataque: 25,

causaDano: function(personagem){
personagem.recebeDano(this.ataque)
},

recebeDano: function(quantidade){
this.vida = this.vida - quantidade
}

}
guerreiro.causaDano(mago)
console.log(mago.vida)