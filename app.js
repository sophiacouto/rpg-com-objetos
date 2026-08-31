class Personagem {
    constructor(nome, vida, ataque) {
        this.nome = nome,
            this.vida = vida,
            this.ataque = ataque

    }

    causaDano(personagem) {
        personagem.recebeDano(this.ataque)
    }

    recebeDano(quantidade) {
        this.vida = this.vida - quantidade

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

const guerreiro = new Personagem("Alfarr", 70,20)

const elfo = new Personagem("Logon", 80, 25)

const mago = new Personagem("Lazar", 60, 25)

const arqueiro = new Personagem("Apollo", 80, 25)

const dragão = new Personagem("Diaval", 100, 50)

const anjo = new Personagem("Muriel", 110, 15)

anjo.causaDano(elfo)
console.log("Muriel atacou Logon")
console.log("Vida do Logon:", elfo.vida)

guereiro.causaDano(arqueiro)
console.log("Alfarr atacou Apollo")
console.log("Vida do Apollo:", arqueiro.vida)

mago.causaDano(dragão)
console.log("Lazar atacou Diaval")
console.log("Vida do Diaval:", dragão.vida)






    