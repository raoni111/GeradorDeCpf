import GeraCPF from './modules/gera_CPF'
import './assets/css/style.css';

function evento() {
    const button = document.getElementById('gerar');
    button.addEventListener('click', () => gerar())
}
evento();
function gerar() {
    const resultado = document.querySelector('.resultado');
    const geraCpf = new GeraCPF().geraNovoCpf();
    resultado.textContent = geraCpf;
}
gerar()