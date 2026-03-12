function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Devil's food cake",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
