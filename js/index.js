// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePep => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let whiteSauce = document.querySelector('.sauce-white')
  if (state.whiteSauce) {
    whiteSauce.style.visibility = 'visible';
  } else {
    whiteSauce.style.visibility = 'hidden';
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let gfCrust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    gfCrust.setAttribute('class', 'crust crust-gluten-free');
  } else {
    gfCrust.setAttribute('class', 'crust');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni) {
    document.querySelector('.btn.btn-pepperoni').setAttribute('class','btn btn-pepperoni');
  } else {
    document.querySelector('.btn.btn-pepperoni').setAttribute('class','btn btn-pepperoni active');
  }
  if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').setAttribute('class','btn btn-mushrooms');
  } else {
    document.querySelector('.btn.btn-mushrooms').setAttribute('class','btn btn-mushrooms active');
  }
  if (state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').setAttribute('class','btn btn-green-peppers');
  } else {
    document.querySelector('.btn.btn-green-peppers').setAttribute('class','btn btn-green-peppers active');
  }
  if (state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').setAttribute('class','btn btn-sauce');
  } else {
    document.querySelector('.btn.btn-sauce').setAttribute('class','btn btn-sauce active');
  }
  if (state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').setAttribute('class','btn btn-crust');
  } else {
    document.querySelector('.btn.btn-crust').setAttribute('class','btn btn-crust active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = 10;
  priceList = document.querySelector('.price');
  if (state.pepperoni) {
    totalPrice += 1;
  } else {
    document.querySelector()
  }
  if (state.mushrooms) {
    totalPrice += 1;
  }
  if (state.greenPeppers) {
    totalPrice += 1;
  }
  if (state.whiteSauce) {
    totalPrice += 3;
  }
  if (state.glutenFreeCrust) {
    totalPrice += 5;
  }
  priceList.querySelector('strong').innerHTML = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})