
const btnAvancar = document.getElementById("btn-avancar")
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");
const btnVoltar = document.getElementById("btn-voltar")

btnAvancar.addEventListener("click", function () {
const ehUltimoCartao = cartaoAtual ===cartoes.length - 1;
     if (ehUltimoCartao) return;

    esconderCartoesSelecionado();

    cartaoAtual++;

    mostrarCartao();



})

btnVoltar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === 0;

    if (ehPrimeiroCartao) return;

    esconderCartoesSelecionado();

    cartaoAtual--;

    mostrarCartao();


})

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartoesSelecionado()
 {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
