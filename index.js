const formRecette = document.querySelector('form');
const Plat = document.getElementById('titre');
const Détails = document.getElementById('Recette');
const recetteContainer = document.getElementById('recetteContainer');

let recettes = [];

formRecette.addEventListener('submit', function(event){
    event.preventDefault();
    addRecette();
})

function addRecette(){
    const recetteTitre = Plat.value.trim();
    console.log(recetteTitre);
    const recetteDétail = Détails.value.trim();
    if (recetteTitre === '' && recetteDétail ==='') return;
    recettes.push({titre: recetteTitre, détail: recetteDétail}); 
    displayRecettes();
    console.log(recettes);
Plat.value ='';
Détails.value ='';
}

function displayRecettes(){
    recetteContainer.innerHTML ='';
    recettes.forEach((recette, index) =>{
const recetteElement = document.createElement('div');
recetteElement.textContent = recette.text;
recetteContainer.appendChild(recetteElement);
 })
}