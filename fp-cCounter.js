// temp location
// add taych and R

const MEALS = [
  { description: 'Breakfast', calories: 550 },
  { description: 'Post-workout', calories: 400 },
  { description: 'Dinner', calories: 1100 },
];

const { td, th, tr, tbody } = tags;

function cell(tag, className, value) { 
  return tag({className}, value);
}

function mealRow(className, meal) {
  return tr({ className }, [
    cell(td, 'pa2', meal.description),
    cell(td, 'pa2 tr', meal.calories),
  ]);
}

function mealsBody(className, meals) {
  const rows = R.map(R.partial(mealRow, ['stripe-dark']), meals);
  return tbody({ className }, rows);
}
