export default class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        })
    }
    verificaCPF() {
        if(this.cpfLimpo.length !== 11) return false;
        if(this.cpfLimpo === 'undefined') return false;
        const cpfArray = Array.from(this.cpfLimpo);
        
        const sequencia = cpfArray[0].repeat(this.cpfLimpo.length);
        if(sequencia === this.cpfLimpo) return false;
        cpfArray.splice(-2, 2)
        return ValidaCPF.calculo(cpfArray) === this.cpfLimpo;
    }
    static calculo(cpfArray) {
        const cpfMult = cpfArray.map( (value, index) => value * Number((cpfArray.length + 1) - index))
        const cpfReduce = cpfMult.reduce( (multiplicador, value) => multiplicador += value);
        let primeiroNumero = 11 - (cpfReduce % 11);
        if(primeiroNumero >= 10) primeiroNumero = 0;
        cpfArray.push(String(primeiroNumero))
        
        const cpfMult2 = cpfArray.map( (value, index) => value * Number((cpfArray.length + 1) - index))
        const cpfReduce2 = cpfMult2.reduce( (multiplicador, value) => multiplicador += value);
        let segundoNumero = 11 - (cpfReduce2 % 11);
        if(segundoNumero >= 10) segundoNumero = 0;
        console.log(segundoNumero)
        cpfArray.push(String(segundoNumero));
        
        return String(cpfArray).replace(/\D+/g, '');
    }
}
