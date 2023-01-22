/* 
OBJETIVO 01: Quando o usuário clicar no botão "VEJA O TRAILER", devemos abrir a modal com o vídeo.
- Passo 1: Dar um jeito de pegar o elemento que representa o botão na tela usando o JS.
- Passo 2: Dar um jeito de identificar quando o usuário clicar no botão.
- Passo 3: Dar um jeito de pegar o elemento da modal no JS.
- Passo 4: Abrir a modal na tela.

OBJETIVO 02: Quando o usuário clicar no X devemos fechar a modal.
- Passo 1: Dar um jeito de pegar o elemento de fechar a modal usando o JS.
- Passo 2: Dar um jeito de identificar quando o usuário clicar no X.
- Passo 3: Fechar a modal.
*/

const botaoTrailer = document.querySelector(".botao-trailer");      //adquirir a classe do botao
const botaoFecharModal = document.querySelector(".fechar-modal");   //adquirir a classe de fechar o video
const video = document.getElementById("video");                     //adquirir o ID video
const modal = document.querySelector(".modal");                     //adquirir a classe modal
const linkDoVideo = video.src;                                      //adquirir o link do video pelo atributo do ID video

function alternarModal() {                                          //função para adicionar a classe "aberto"
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {                      //adicionando evento ao clique do botao
        alternarModal();
        video.setAttribute("src", linkDoVideo);                     //atribuindo o link do video em "src"
})

botaoFecharModal.addEventListener("click", () => {                  //adicionando evento ao clique no X
        alternarModal();
        video.setAttribute("src", "");                              //tirando o link do video em "src"
 })