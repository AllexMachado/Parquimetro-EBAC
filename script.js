/*
    Objeto - VagasEstacionamento

    Atributos - Minutos e os Valores em Reais

    Métodos - Converter a quantidade de minuto para reais

    Instância - Carro no Estscionamento
*/

class Estacionamento{
    constructor(minutos, valor){
        this.minutos = minutos
        this.valor = valor
    }

    Conversor(){
        const min = Number.parseInt(document.getElementById("min").value)

        if (min <= 5){
            this.minutos = min
            this.valor = 0
            this.Updator(this.valor.value)
        } else if (min <= 30){
            this.minutos = min
            this.valor = 1.00
            this.Updator(this.valor.value)
        } else if (min <= 60){
            this.minutos = min
            this.valor = 1.75
            this.Updator(this.valor.value)
        } else if (min <= 120){
            this.minutos = min
            this.valor = 3.00
            this.Updator(this.valor.value)
        } else {
            this.minutos = min
            this.Updator(this.minutos)
        }
    }

    Updator(valorRes){
        let res = document.getElementById("res")
        res.innerText = ``
        if (this.minutos <= 5){
            return res.innerText = 'Valor Insuficiente.'
        } else if (this.minutos <= 120){
            return res.innerText = `Valor: R$${this.valor.toFixed(2).replace(".", ",")}`
        } else if (this.minutos > 120){
            return res.innerText = 'Limite de tempo excedido!'
        }
    }
}

const vaga = new Estacionamento()