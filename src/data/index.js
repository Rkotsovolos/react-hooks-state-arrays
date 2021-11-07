const spicyFoods = [
  { id: 1, name: "Buffalo Wings", cuisine: "American", heatLevel: 3 },
  { id: 2, name: "Mapo Tofu", cuisine: "Sichuan", heatLevel: 6 },
];

let nextId = 3;

const newSpicyFoods = [
  { name: "Green Curry", cuisine: "Thai", heatLevel: 9 },
  { name: "Enchiladas", cuisine: "Mexican", heatLevel: 2 },
  { name: "5 Alarm Chili", cuisine: "American", heatLevel: 5 },
];

const foodList = foods.map((food) => (
  <li key={food.id}>
    {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  </li>
));

return (
  <div>
    <button onClick={handleAddFood}>Add New Food</button>
    <ul>{foodList}</ul>
  </div>
);

// Get one random spicy food from the array
function randomSpicyFood() {
  const index = Math.floor(Math.random() * newSpicyFoods.length);
  const newSpicyFood = { ...newSpicyFoods[index] };
  newSpicyFood.id = nextId;
  nextId++;
  return newSpicyFood;
}

function getNewSpicyFood() {
  return randomSpicyFood();
}

export { spicyFoods, getNewSpicyFood };
