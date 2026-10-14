document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".puppy-card");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove classe ativa de todos os botões e adiciona no clicado
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            cards.forEach(card => {
                if (filterValue === "todos") {
                    card.style.display = "block";
                } else {
                    if (card.getAttribute("data-category") === filterValue) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                }
            });
        });
    });
});
