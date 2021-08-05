import ValidaCPF from "./valida_CPF";

export default class GeraCPF {
    rand(min = 10000000, max = 99999999) {
        return Math.floor(Math.random() * (max - min) + max)
    }
    formatarCpf(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3,6) + '.' +
            cpf.slice(6,9) + '-' +
            cpf.slice(9, 11)
        )
    }
    geraNovoCpf() {
        const cpfSemDigito = this.rand();
        const cpfComDigito = ValidaCPF.calculo(Array.from(String(cpfSemDigito)));
        return this.formatarCpf(cpfComDigito);
    }
}