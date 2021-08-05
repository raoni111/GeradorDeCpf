import GeraCPF from './modules/gera_CPF'
import './assets/css/style.css';

function evento() {
    console.log('test1')
    const button = document.getElementById('gerar');
    console.log(button)
    button.addEventListener('click', () => gerar())
}
evento();
function gerar() {
    const resultado = document.querySelector('.resultado');
    const geraCpf = new GeraCPF().geraNovoCpf();
    resultado.textContent = geraCpf;
}
gerar()