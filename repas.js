const breakfastContainer = document.getElementById('breakfastContainer');
const lunchContainer = document.getElementById('lunchContainer');
const dinnerContainer = document.getElementById('dinnerContainer');
const mealType = document.getElementById('mealType');
const formMeal = document.querySelector('form');


function cardDay() {
    if(mealType.style.display === "none"){
        mealType.style.display = "block";
    }
    else{
        mealType.style.display = "none" ;
    }
}