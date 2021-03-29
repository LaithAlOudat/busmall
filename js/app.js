'use strict';
// globe variables and functions:-
let productsImages = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg',
  'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg',
  'scissors.jpg', 'shark.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];
let rounds = 25;
let numOfRounds = 0;
let leftIndex;
let middleIndex;
let rightIndex;

// get images section and it's element by ID:
let imgsSection = document.getElementById('imgsSection');
let leftImage = document.getElementById('leftImage');
let middleImage = document.getElementById('middleImage');
let rightImage = document.getElementById('rightImage');
// button section and button element by ID:
let btnSection = document.getElementById('btnSection');
let resultBtn = document.getElementById('resultBtn');



// generate a random number:
function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// constructor for the products' images:
function Product(nameOfProduct) {
  this.nameOfProduct = nameOfProduct;
  this.image = `/../imgs/${nameOfProduct}`;
  this.shownTime = 0;
  this.voteTime = 0;
  Product.all.push(this);
}
Product.all = [];

// creating instances for all products' images array:

for (let i = 0; i < productsImages.length; i++) {
  new Product(productsImages[i]);
}

// function for render the products' images:
function render() {
  leftIndex = getRandomNumber(0, Product.all.length - 1);
  // console.log(Product.all[leftIndex].image);
  leftImage.src = Product.all[leftIndex].image;
  leftImage.title = Product.all[leftIndex].nameOfProduct;
  leftImage.alt = Product.all[leftIndex].nameOfProduct;
  middleIndex = getRandomNumber(0, Product.all.length - 1);
  middleImage.src = Product.all[middleIndex].image;
  middleImage.title = Product.all[middleIndex].nameOfProduct;
  middleImage.alt = Product.all[middleIndex].nameOfProduct;
  rightIndex = getRandomNumber(0, Product.all.length - 1);
  rightImage.src = Product.all[rightIndex].image;
  rightImage.title = Product.all[rightIndex].nameOfProduct;
  rightImage.alt = Product.all[rightIndex].nameOfProduct;

  if (leftIndex === middleIndex) {
    render();
  } else {
    if (leftIndex === rightIndex) {
      render();
    } else {
      if (middleIndex === rightIndex) {
        render();
      }
    }

  }
}

render();


// 1) adding an event listener
// 2) adding counter to count vote, shown time and number of rounds:

imgsSection.addEventListener('click', mouseClicking);
function mouseClicking(event) {
  if (event.target.id !== 'imgsSection') {
    if (numOfRounds < rounds) {
      numOfRounds++;
      if (event.target.id === leftImage.id) {
        Product.all[leftIndex].voteTime++;
      }
      if (event.target.id === middleImage.id) {
        Product.all[middleIndex].voteTime++;
      }
      if (event.target.id === rightImage.id) {
        Product.all[rightIndex].voteTime++;

      }

      render();


    }

    let ulEl = document.getElementById('listsSection');
    let liEl;
    for (let i = 0; i < Product.all.length; i++) {
      Product.voteTime.push(Product.all[i].voteTime);
      Product.shownTime.push(Product.all[i].shownTime);
      liEl = document.createElement('li');
      liEl.textContent = `${Product.all[i].nameOfProduct} has ${Product.all[i].shownTime} views and has ${Product.all[i].voteTime} votes.`;
      ulEl.appendChild(liEl);
    }
    imgsSection.removeEventListener('click', mouseClicking);
    // console.log('voteTime ', Product.voteTime);
    // console.log('shownTime ', Product.shownTime);
  }
}

// imgsSection.addEventListener('click', mouseclicking);

// function mouseclicking(event) {
//   // rounds++;
//   // if (event.target.id !== 'imgsSection') {
//   //   if (event.target.id === rightImage.id) {
//   //     Product.all[rightIndex].voteTime++;
//   //   } else {
//   //     if (event.target.id === leftImage.id) {
//   //       Product.all[leftIndex].voteTime++;

//   //     }
//   //   }

//   if (event.target.id === 'leftImage') {
//     Product.all[leftIndex].voteTime++;
//     rounds--;
//     render();
//   } if (event.target.id === 'middleImage') {
//     Product.all[middleIndex].voteTime++;
//     rounds--;
//     render();
//   } else {
//     if (event.target.id === 'rightImage') {
//       Product.all[rightIndex].voteTime++;
//       rounds--;
//       render();

//     }

//   }
// }
// render();


// console.log(rounds);
// console.log(Product.voteTime);
// console.log(Product.shownTime);



























































// 'sweep.png', 'usb.gif',
