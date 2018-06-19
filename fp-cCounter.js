// temp location
// add taych and R

const MEALS = [
  { description: 'Breakfast', calories: 550 },
  { description: 'Post-workout', calories: 400 },
  { description: 'Dinner', calories: 1100 },
];

// unpacking
const { td, th, tr, tbody, thead, table} = tags;

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

// header row consists of 2 cells
const headerRow = tr([
  cell(th, 'pa2 tl', 'Meal'),
  cell(th, 'pa2 tr', 'Calories')
]);

const mealHeader = thead(headerRow);

// implement es6+ later?
function totalRow(meals) {
  const total = R.compose(
    R.reduce((acc, calories) => acc + calories, 0),
    R.map(meal => meal.calories)
  )(meals)
  return tr({className: 'bt b'}, [
    cell(td, 'pa2 tr', 'Total'),
    cell(td, 'pa2 tr', total)
  ])
}

function mealDisplay(meals) {
  return table({className: 'mw5 center w-100 collapse'}, [
               mealHeader,
               mealsBody('', meals),
                totalRow(meals)
               ])
}
const node = document.getElementById('app');

const view = mealDisplay(MEALS);

node.appendChild(view);
