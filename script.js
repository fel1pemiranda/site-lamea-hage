const menuBotao = document.querySelector(".menu-botao");
const navegacao = document.querySelector(".navegacao");
const anoAtual = document.querySelector("#ano-atual");

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

if (menuBotao && navegacao) {
  menuBotao.addEventListener("click", () => {
    const menuEstaAberto = menuBotao.getAttribute("aria-expanded") === "true";

    menuBotao.setAttribute("aria-expanded", String(!menuEstaAberto));
    menuBotao.classList.toggle("esta-aberto", !menuEstaAberto);
    navegacao.classList.toggle("esta-aberto", !menuEstaAberto);
  });

  navegacao.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBotao.setAttribute("aria-expanded", "false");
      menuBotao.classList.remove("esta-aberto");
      navegacao.classList.remove("esta-aberto");
    });
  });
}
