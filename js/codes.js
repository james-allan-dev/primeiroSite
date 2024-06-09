alert('feito com muito carinho pra vc, amor');
/*objetivo 1- quando o cliete apertar na seta avançar temos que mostrar
o proximo cartao na lista
1 passo: dar um jeito de pegar o elemento html da seta avançar
2 passo: dar um jeito de indentificar o clique do usuario na seta
3 passo : fazer aprecer o proximo elemento da lista
4 passo : buscar o cartao que esta selecionado e esconder

obetivo 2: quando apertamos na seta voltar, temos que mostrar o cartao anterior da lista
1 passo: dar um jeito de pegar o elemento html da seta voltar
2 passo: dar um jeito de indentificar o clique do usuario na seta voltar
3 passo : fazer aprecer o elemento da lista anterior
4 passo : buscar o cartao que esta selecionado e esconder
*/

//1 passo: dar um jeito de pegar o elemento html da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");
//2 passo: dar um jeito de indentificar o clique do usuario na seta
btnAvancar.addEventListener("click", function () {
    const ehUltimoCartao= cartaoAtual === cartoes.length - 1;
    if (cartaoAtual === cartoes.length - 1) return;

    //4 passo : buscar o cartao que esta selecionado e esconder
    esconderCartoesSelecionados();

    // 3 passo : fazer aprecer o proximo elemento da lista

    cartaoAtual++;
    mostrarCartao();

    //4 passo : buscar o cartao que esta selecionado e esconder

});

btnVoltar.addEventListener("click", function () {
const ehPrimeiroCartao= cartaoAtual ===0;
   if(ehPrimeiroCartao )return;

   esconderCartoesSelecionados();

    cartaoAtual--;
    mostrarCartao();

});

function mostrarCartao() {
    (cartoes[cartaoAtual]).classList.add("selecionado");
}

function esconderCartoesSelecionados() {
    const cartaoselecionado = document.querySelector(".selecionado");
    cartaoselecionado.classList.remove("selecionado");
}

