const affichage = document.querySelector(".affichage");
const boutons = document.querySelectorAll(".bouton li");

let calcul = "";

boutons.forEach(bouton => {
    bouton.addEventListener("click", () => {
        const valeur = bouton.textContent;

        // Effacer
        if (valeur === "effacer") {
            calcul = "";
            affichage.textContent = "";
            return;
        }

        // Valider (= calcul)
        if (valeur === "valider") {
            try {
                // Sécurité minimale
                if (calcul === "") return;

                const resultat = eval(calcul);

                if (resultat === Infinity || resultat === -Infinity) {
                    affichage.textContent = "Erreur";
                    calcul = "";
                } else {
                    affichage.textContent = resultat;
                    calcul = resultat.toString();
                }
            } catch (error) {
                affichage.textContent = "Erreur";
                calcul = "";
            }
            return;
        }

        // Empêcher deux opérateurs d'affilée
        const derniersChar = calcul.slice(-1);
        const operateurs = ["+", "-", "*", "/"];

        if (operateurs.includes(valeur) && operateurs.includes(derniersChar)) {
            return;
        }

        // Ajout normal
        calcul += valeur;
        affichage.textContent = calcul;
    });
});
