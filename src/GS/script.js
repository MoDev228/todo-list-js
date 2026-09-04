const form = document.querySelector(".form");

const tache = document.querySelector("#tache");

const list = document.querySelector(".list_tache");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  const texteTache = tache.value.trim();

  if (texteTache !== "") {

    const nouvelleTache = document.createElement("li");

    const textElement = document.createElement("span");

    const boutonSupprimer = document.createElement("button");

    const boutonModifier = document.createElement("button");

    let ancienneValeur;

    let enModification = false;

    textElement.textContent = texteTache;

    boutonSupprimer.textContent = "Supprimer";

    boutonModifier.textContent = "Modifier";

    nouvelleTache.addEventListener("click", () => {

      if (enModification) {

        return;

      }

      nouvelleTache.classList.toggle("terminee");

    });

    boutonSupprimer.addEventListener("click", (event) => {

      event.stopPropagation();

      if (boutonSupprimer.textContent === "Annuler") {

        enModification = false;

        const inputModification = nouvelleTache.querySelector("input");

        textElement.textContent = ancienneValeur;

        inputModification.replaceWith(textElement);

        boutonModifier.textContent = "Modifier";

        boutonSupprimer.textContent = "Supprimer";

      } else {

        nouvelleTache.remove();

      }

    });

    boutonModifier.addEventListener("click", (event) => {

      event.stopPropagation();

      if (boutonModifier.textContent === "Modifier") {

        enModification = true;

        ancienneValeur = textElement.textContent;

        const inputModification = document.createElement("input");

        inputModification.value = textElement.textContent;

        textElement.replaceWith(inputModification);

        boutonModifier.textContent = "Enregistrer";

        boutonSupprimer.textContent = "Annuler";

        inputModification.focus();

      } else {

        enModification = false;

        const inputModification = nouvelleTache.querySelector("input");

        const nouvelleValeur = inputModification.value.trim();

        if (nouvelleValeur !== "") {

          textElement.textContent = nouvelleValeur;

        } else {

          nouvelleTache.remove();

          return;

        }

        inputModification.replaceWith(textElement);

        boutonModifier.textContent = "Modifier";

        boutonSupprimer.textContent = "Supprimer";

      }

    });

    nouvelleTache.appendChild(textElement);

    nouvelleTache.appendChild(boutonModifier);

    nouvelleTache.appendChild(boutonSupprimer);

    list.appendChild(nouvelleTache);

  }

  tache.value = "";

});