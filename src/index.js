function displayRecipe(response) {
  console.log(response.data.answer);
  let recipeDiv = document.querySelector("#recipe");
  let text = response.data.answer;

  text = text
    .replace(/#### (.*?)(\n|$)/g, "<h4>$1</h4>\n")
    .replace(/### (.*?)(\n|$)/g, "<h3>$1</h3>\n")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/^- (.*?)(\n|$)/gm, "<li>$1</li>")
    .replace(/(<li>.*?<\/li>)/gs, "<ul>$1</ul>")
    .replace(/\n/g, "<br/>");
  recipeDiv.innerHTML = text;
}

function generateRecipe(event) {
  event.preventDefault();

  let recipeDiv = document.querySelector("#recipe");
  recipeDiv.innerHTML = "Generating new recipe...";
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "fad20348e4cdad62eo6a43actbfe6170";
  let context =
    "You are an AI assistant expert in gastronomy, you deliver the most famous recipes from all around the world. The recipe should be easy to reproduce at home and should not require many technical skills. Always format your response clearly with these sections: Recipe Name, Ingredients (as a bullet list), and Instructions (as numbered steps). Make sure to follow the user instructions.";
  let prompt = `User instructions are: Generate a recipe of ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
