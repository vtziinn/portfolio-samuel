// Scripts do portfólio
// Estrutura preparada para futuras interações.
document.addEventListener("DOMContentLoaded", () => {
  // Atualiza automaticamente o ano do rodapé.
  const footer = document.querySelector("footer");
  if (footer) {
    footer.innerHTML = footer.innerHTML.replace(/© \d{4}/, `© ${new Date().getFullYear()}`);
  }

  // Rolagem suave para links internos.
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
