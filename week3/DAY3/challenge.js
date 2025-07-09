document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("libform");
  const storyOutput = document.getElementById("story");
  const libButton = document.getElementById("lib-button");

  // Création du bouton "Shuffle" une seule fois
  const shuffleButton = document.createElement("button");
  shuffleButton.textContent = "Shuffle Story";
  shuffleButton.type = "button";
  document.body.appendChild(shuffleButton);

  // Tableau d’histoires
  const storyTemplates = [
    (w) => `Once upon a time, a ${w.adjective} ${w.noun} wanted to ${w.verb} with ${w.person} in ${w.place}.`,
    (w) => `${w.person} saw a ${w.adjective} ${w.noun} while walking through ${w.place} and decided to ${w.verb}.`,
    (w) => `In ${w.place}, a mysterious ${w.noun} appeared and asked ${w.person} to ${w.verb} like a ${w.adjective} ninja.`,
    (w) => `Never forget the day when ${w.person} tried to ${w.verb} a ${w.adjective} ${w.noun} in ${w.place}.`,
    (w) => `Every ${w.noun} dreams of being ${w.adjective} enough to ${w.verb} with ${w.person} at ${w.place}.`
  ];

  let userWords = {};

  function getFormValues() {
    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();

    if (!noun || !adjective || !person || !verb || !place) {
      alert("Tous les champs doivent être remplis !");
      return null;
    }

    return { noun, adjective, person, verb, place };
  }

  function generateStory(words) {
    const randomIndex = Math.floor(Math.random() * storyTemplates.length);
    return storyTemplates[randomIndex](words);
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const values = getFormValues();
    if (values) {
      userWords = values;
      const story = generateStory(userWords);
      console.log("Story generated:", story);
      storyOutput.textContent = story;
    }
  });

  shuffleButton.addEventListener("click", () => {
    if (Object.keys(userWords).length === 0) {
      alert("Veuillez d'abord remplir le formulaire !");
      return;
    }
    const story = generateStory(userWords);
    console.log("Story shuffled:", story);
    storyOutput.textContent = story;
  });
});
