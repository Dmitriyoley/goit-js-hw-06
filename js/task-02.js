const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
const ingredientsUl = document.querySelector('#ingredients');
const ingredientsList = ingredients.map(el => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.classList.add('item');
  ingredientsEl.textContent = el;
  return ingredientsEl
});
ingredientsUl.append(...ingredientsList);
console.log(ingredientsUl)