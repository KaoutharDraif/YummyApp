const formRecette = document.querySelector('form');
const Plat = document.getElementById('titre');
const Détails = document.getElementById('Recette');
const recetteContainer = document.getElementById('recetteContainer');

let recettes = [];

formRecette.addEventListener('submit', function (event) {
    event.preventDefault();
    addRecette();
})

function addRecette() {
    const recetteTitre = Plat.value.trim();
    const recetteDétail = Détails.value.trim();
    if (recetteTitre === '' && recetteDétail === '') return;
    recettes.push({ titre: recetteTitre, détail: recetteDétail });
    displayRecettes();
    Plat.value = '';
    Détails.value = '';
}


function displayRecettes() {
    recetteContainer.innerHTML = '';
    recettes.forEach((recette, index) => { 
        const recetteElement = document.createElement('div'); //creates a new div element to display the recipe on the webpage
        

        const Recipe = document.createElement('h3');
        Recipe.textContent = recette.titre;
        recetteElement.appendChild(Recipe);

        const ingredients = document.createElement('p');
        ingredients.textContent = recette.détail;
        recetteElement.appendChild(ingredients);

        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        editButton.addEventListener('click', () => {
            editRecipe(index);

        });

        // const deleteButton = document.createElement('button');
        // deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        // deleteButton.addEventListener('click', () => {
        //     deleteRecipe(index);
        // });

        recetteContainer.appendChild(recetteElement);
        recetteContainer.appendChild(editButton);
        // recetteContainer.appendChild(deleteRecipe);
    })
}

function editRecipe(index) {
    const newtitleRecipe = prompt('Modifie le titre de la recette:', recettes[index].titre);
    if (newtitleRecipe !== null && newtitleRecipe !== '') {
        recettes[index].titre = newtitleRecipe;
        displayRecettes(); 
    }
    const newRecipe = prompt('Modifie votre recette:', recettes[index].détail);
    if (newRecipe !== null && newRecipe !== '') {
        recettes[index].détail = newRecipe;
        displayRecettes(); 
    }
}










