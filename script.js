

class Estacionamento{
    constructor(minutos, valor){
        this.minutos = minutos
        this.valor = valor
    }

    Conversor(){
        this.minutos = 0
        this.valor = Number(document.getElementById("valor").value)
        let res = document.getElementById("res")
        let troco = String(this.valor.toFixed(2)).split('.')
        res.innerText = ''

        if(this.valor < 1.00){
            res.innerText = `Valor insuficente!`
        } else {
            if(this.valor > 1.00 && this.valor < 1.75){
                res.innerHTML = `Com <strong>R$${this.valor.toFixed(2).replace(".", ",")}</strong> você tem direito a: <strong>30 - 60</strong> minutos no Estacionamento.`
            } else if(this.valor >= 1.75 && this.valor < 3.00){
                res.innerHTML = `Com <strong>R$${this.valor.toFixed(2).replace(".", ",")}</strong> você tem direito a: <strong>60 - 120</strong> minutos no Estacionamento.`
            } else {
                res.innerHTML = `Com <strong>R$${this.valor.toFixed(2).replace(".", ",")}</strong> você tem direito a mais que <strong>120</strong>min no Estacionamento.`
            }
        }
    }
}


const vaga = new Estacionamento()