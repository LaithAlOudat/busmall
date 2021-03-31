'use strict';
// globe variables and functions:-
let productsImages = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg',
  'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg',
  'scissors.jpg', 'shark.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];
let rounds = 25;
let a = 0;
let leftIndex;
let middleIndex;
let rightIndex;
let votes = [];
let views = [];
// define globe variables and get elements by ID:
let imgsSection = document.getElementById('imgsSection');
let leftImage = document.getElementById('leftImage');
let middleImage = document.getElementById('middleImage');
let rightImage = document.getElementById('rightImage');



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

// 1) function for render the products' images:
// 2) adding a views counter:
function render() {
  leftIndex = getRandomNumber(0, Product.all.length - 1);
  // console.log(Product.all[leftIndex].image);
  leftImage.src = Product.all[leftIndex].image;
  leftImage.title = Product.all[leftIndex].nameOfProduct;
  leftImage.alt = Product.all[leftIndex].nameOfProduct;
  Product.all[leftIndex].shownTime++;
  middleIndex = getRandomNumber(0, Product.all.length - 1);
  middleImage.src = Product.all[middleIndex].image;
  middleImage.title = Product.all[middleIndex].nameOfProduct;
  middleImage.alt = Product.all[middleIndex].nameOfProduct;
  Product.all[middleIndex].shownTime++;
  rightIndex = getRandomNumber(0, Product.all.length - 1);
  rightImage.src = Product.all[rightIndex].image;
  rightImage.title = Product.all[rightIndex].nameOfProduct;
  rightImage.alt = Product.all[rightIndex].nameOfProduct;
  Product.all[rightIndex].shownTime++;


  while (leftIndex === middleIndex || leftIndex === rightIndex || middleIndex === rightIndex) {
    render();


  }

  // else {
  // render();
  // checkIndexs.push[rightIndex, leftIndex, middleIndex]
}

render();

// 1) adding an event listener
// 2) adding counter to count vote and number of rounds:

imgsSection.addEventListener('click', mouseClicking);
function mouseClicking(event) {
  if (event.target.id !== 'imgsSection') {
    if (a < rounds) {
      a++;
      if (event.target.id === leftImage.id) {
        Product.all[leftIndex].voteTime++;
        // Product.all[leftIndex].shownTime++;

      }
      if (event.target.id === middleImage.id) {
        Product.all[middleIndex].voteTime++;
        // Product.all[middleIndex].shownTime++;

      }
      if (event.target.id === rightImage.id) {
        Product.all[rightIndex].voteTime++;
        // Product.all[rightIndex].shownTime++;


      }
      // console.log('voteTime ', Product.all[rightIndex]);
      // console.log('voteTime ', Product.all[leftIndex]);
      // console.log('voteTime ', Product.all[middleIndex]);

      render();


    }
    if (a === rounds) {
      let listsSection = document.getElementById('listsSection');
      let ulEl1 = document.createElement('ul');
      listsSection.appendChild(ulEl1);
      for (let i = 0; i < Product.all.length; i++) {
        // Product.voteTime.push(Product.all[i].voteTime);
        // Product.shownTime.push(Product.all[i].shownTime);
        let liEl1 = document.createElement('li');
        ulEl1.appendChild(liEl1);
        liEl1.textContent = `${Product.all[i].nameOfProduct} has ${Product.all[i].shownTime} views and has ${Product.all[i].voteTime} votes.`;
        votes.push(Product.all[i].voteTime);
        views.push(Product.all[i].shownTime);
      }
      imgsSection.removeEventListener('click', mouseClicking);

      renderMyChart();
      // console.log('voteTime ', Product.voteTime);
      // console.log('shownTime ', Product.shownTime);
    }
  }
}


function renderMyChart() {
  let ctx = document.getElementById('myChart').getContext('2d');
  let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg',
        'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg',
        'scissors.jpg', 'shark.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'],
      datasets: [{
        label: 'votes',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: votes,
      },
      {
        label: 'views',
        backgroundColor: 'rgb(5, 133, 197)',
        borderColor: 'rgb(255, 99, 132)',
        data: views,
      }]
    },

    // Configuration options go here
    options: {}
  });
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

// console.log(rounds);
// console.log(a);
// console.log(Product.all[rightIndex].voteTime);
// console.log(Product.all[rightIndex].shownTime);
// console.log(Product.all[leftIndex].voteTime);
// console.log(Product.all[leftIndex].shownTime);
// console.log(Product.all[middleIndex].voteTime);
// console.log(Product.all[middleIndex].shownTime);
// render();

console.log(votes);
localStorage.setItem('productStorageData', productsImages);
let productsData = JSON.stringify('productStorageData');
localStorage.setItem('voteStorageData', votes);
let votesData = JSON.stringify('voteStorageData');




























































// 'sweep.png', 'usb.gif',
