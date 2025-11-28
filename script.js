
class Parquimetro{
    constructor(valorInserido){
        this.valor = valorInserido
        this.troco = 0
        this.tempo = 0
    }

    Calcular(){
        if(this.valor < 1){
            return `<p>Valor Insuficiente</p>`
        }

        if(this.valor >= 1 && this.valor < 1.75){
            this.tempo = 30
            this.troco = (this.valor - 1).toFixed(2)
        } else if(this.valor >= 1.75 && this.valor < 3){
            this.tempo = 60
            this.troco = (this.valor - 1.75).toFixed(2)
        } else {
            this.tempo = 120
            this.troco = (this.valor - 3).toFixed(2)
        }

        return this.FormatarMensagem()
    }

    FormatarMensagem(){
        let msg = `<p>Tempo adiquirido: ${this.tempo}min.</p>`
        msg += `<p>Troco: R$ ${this.troco}</p>`
        return msg
    }
}

document.getElementById("calcular").addEventListener("click", () => {
    const valor = Number.parseFloat(document.getElementById("valor").value)
    const resultado = document.getElementById("resultado")

    if(isNaN(valor)){
        resultado.innerHTML = `<p>Digite um valor válido!</p>`
        return
    }

    const parq = new Parquimetro(valor)
    resultado.innerHTML = parq.Calcular()
})

