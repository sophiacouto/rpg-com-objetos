 class Personagem {
    constructor(nome, vida, ataque, defesa) {
            this.nome = nome,
            this.vida = vida,
            this.ataque = ataque,
            this.vidaMax =  vida,
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

        if(quantidade < this.defesa){
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


class Teste extends Personagem {
    constructor(nome){
        super(nome, 80, 35, 15)
    }
}




const guerreiro = new Guerreiro("Thorin", 60,20, 15)

const druida = new Personagem("Kode", 80, 25, 15)

const mago = new Personagem("Gandalfe", 60, 35, 5)

const arqueiro = new Personagem("Legolas", 80, 25, 10)

const tita = new Personagem("Kryonix", 100, 50, 7)

const anjo = new Personagem("Muriel", 110, 15, 8)


const personagens = [
    guerreiro,
    mago,
    druida,
    arqueiro,
    tita,
    anjo
]

personagens.forEach(function(personagens){
    personagens.mostrarStatus()
})

let turno = 1 
let jogadorAtual = 0
function proximoTurno(){
    turno = turno + 1
    jogadorAtual = jogadorAtual === 0 ? 1 : 0
}

const vidaGuerreiro = document.getElementById("vida-guerreiro")

vidaGuerreiro.innerText = guerreiro.vida