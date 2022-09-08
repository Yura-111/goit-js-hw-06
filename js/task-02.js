const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listId = document.querySelector('#ingredients');

const makeManu = ingredients.map((ingredient) => {
  const listManu = document.createElement('li');
  listManu.classList.add('item');
  listManu.textContent = `${ingredient}`;

  return listManu;
})

listId.append(...makeManu);

console.log(makeManu);


