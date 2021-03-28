'use strict';

// globe variables and functions:
let productsImages = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
let numOfRound = 0;
let imgsSection = document.getElementById('imgsSection');
let leftImage = document.getElementById('leftImage');
let middleImage = document.getElementById('middleImage');
let rightImage = document.getElementById('rightIMage');


// generate a random number:
function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// constructor to select images
function Products(nameOfProduct) {
  this.nameOfProduct = nameOfProduct;
  this.image = `./imgs/${nameOfProduct}.jpg/`;
  this.shownTime = 0;
  this.voteTime = 0;
  Products.all.push(this);
}
Products.all = [];

for (let i = 0; i < productsImages.length; i++) {
  new Products(productsImages[i]);
}


// adding an event listener and function for the clicking event:

imgsSection.addEventListener('click', mouseclicking);

function mouseclicking(event) {
  if (event.target.id === leftImage.id) {
    Products.all[leftImage].voteTime++;
  } if (event.target.id === middleImage.id) {
    Products.all[middleImage].voteTime++;
  } else {
    Products.all[rightImage].voteTime++;
  }
}

// function for render the products' images:
function render() {
  leftImage = getRandomNumber(0, Products.all.length - 1);
  leftImage.src = Products.all[leftImage].path;
  leftImage.alt = Products.all[leftImage].nameOfProduct;
  leftImage.title = Products.all[leftImage].nameOfProduct;

  middleImage = getRandomNumber(0, Products.all.length - 1);
  middleImage.src = Products.all[middleImage].path;
  middleImage.alt = Products.all[middleImage].nameOfProduct;
  middleImage.title = Products.all[middleImage].nameOfProduct;

  rightImage = getRandomNumber(0, Products.all.length - 1);
  rightImage.src = Products.all[rightImage].path;
  rightImage.alt = Products.all[rightImage].nameOfProduct;
  rightImage.title = Products.all[rightImage].nameOfProduct;

  if (leftImage.src === middleImage.src) {
    render();
  } else {
    if (leftImage.src === rightImage.src) {
      render();
    } else {
      if (middleImage.src === rightImage.scr) {
        render();
      }
    }

  }
}

render();
