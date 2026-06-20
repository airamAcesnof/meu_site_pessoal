// 1. Smooth scroll para links do menu (se adicionares depois)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// 2. Efeito simples ao carregar a página
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});


// 3. Destaque ao passar o rato nos projectos (efeito extra JS opcional)
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.03)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});


// 4. Mensagem no console (marca pessoal do developer)
console.log("🚀 Portfólio de Maria Antónia carregado com sucesso!");