'use strict';
// 'sweep.png', 'usb.gif',
// globe variables and functions:-
let productsImages = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg',
  'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg',
  'scissors.jpg', 'shark.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];
let numOfRound = 0;
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


// console.log(productsImages[17]);

// generate a random number:
function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// constructor to select images
function Product(nameOfProduct) {
  this.nameOfProduct = nameOfProduct;
  this.image = `./imgs/${nameOfProduct}.jpg`;
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
  // leftImage.src = Product.all[leftIndex].path;
  leftImage.title = Product.all[leftIndex].nameOfProduct;
  leftImage.alt = Product.all[leftIndex].nameOfProduct;
  middleIndex = getRandomNumber(0, Product.all.length - 1);
  // middleImage.src = Product.all[middleIndex].path;
  middleImage.title = Product.all[middleIndex].nameOfProduct;
  middleImage.alt = Product.all[middleIndex].nameOfProduct;
  rightIndex = getRandomNumber(0, Product.all.length - 1);
  // rightImage.src = Product.all[rightIndex].path;
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


// adding an event listener and function to vote++ and clicking event:

imgsSection.addEventListener('click', mouseclicking);

function mouseclicking(event) {

  for (let i = 0; i < 25; i++) {
    if (event.target.id === 'leftImage') {
      Product.all[leftIndex].voteTime++;
      numOfRound += numOfRound;
    } if (event.target.id === 'middleImage') {
      Product.all[middleIndex].voteTime++;
      numOfRound += numOfRound;
    } else {
      if (event.target.id === 'rightImage') {
        Product.all[rightIndex].voteTime++;
        numOfRound += numOfRound;
      } else {
        event.target.id === 'hola';
        break;
      }

    }
  }
  console.log(numOfRound);
  console.log(Product.all.voteTime);
  console.log(Product.all.shownTime);
}
