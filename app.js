class Personagem {
    constructor(nome, vida, ataque) {
        this.nome = nome,
            this.vida = vida,
            this.ataque = ataque
            this.vidaMax = vida,
            this.defesa = defesa

    }

    curar(quantidade){
        this.vida = this.vida + quantidade
        
        if(this.vida > this.vidaMax){
            this.vida = this.vidaMax
        }
    }

    causaDano(personagem) {
        personagem.recebeDano(this.ataque)
    }

    recebeDano(quantidade) {
        let dano = quantidade - this.defesa

        if (quantidade < this.defesa) {
            dano = 0
         
        }
        this.vida = this.vida - dano 

        if (this.vida <= 0) {
            this.vida = "eliminado"

        }
    }
      estaVivo(){
        return this.vida > 0
      }

      mostrarStatus(){
console.log(this.nome + " | Vida: " + this.vida)
}
}

class Guerreiro extends Personagem {
    golpePesado(personagem){
    personagem.recebeDano(this.ataque * 2)
}
}
const guerreiro = new Guerreiro("Alfarr", 60, 20, 15)

const elfo = new Personagem("Logon", 80, 25)

const mago = new Personagem("Lazar", 60, 35, 5)

const arqueiro = new Personagem("Apollo", 80, 25)

const dragão = new Personagem("Diaval", 100, 50)

const anjo = new Personagem("Muriel", 110, 15)

const personagens = [
    guerreiro,
    elfo,
    mago,
    arqueiro,
    dragão,
    anjo 
]

personagens.forEach(function(personagem){
    personagem.mostrarStatus()
})
let turno = 1 
let jogadorAtual = 0 
function proximoTurno(){
    turno = turno + 1
    jogadorAtual = jogadorAtual === 0 ? 1 : 0 
}
proximoTurno()
proximoTurno()

console.log(turno)
console.log(jogadorAtual)