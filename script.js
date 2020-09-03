const characters = [
  {
    name: 'anduin',
    src: 'images/anduin.png'
  },
  {
    name: 'genn',
    src: 'images/genn.png'
  },
  {
    name: 'guldan',
    src: 'images/guldan.png'
  },
  {
    name: 'illidan',
    src: 'images/illidan.png'
  },
  {
    name: 'khadgar',
    src: 'images/khadgar.png'
  },
  {
    name: 'magni',
    src: 'images/magni.png'
  },
  {
    name: 'maiev',
    src: 'images/maiev.png'
  },
  {
    name: 'sylvanas',
    src: 'images/sylvanas.png'
  },
  {
    name: 'varian',
    src: 'images/varian.png'
  },
  {
    name: 'volgin',
    src: 'images/volgin.png'
  },
  {
    name: 'anduin',
    src: 'images/anduin.png'
  },
  {
    name: 'genn',
    src: 'images/genn.png'
  },
  {
    name: 'guldan',
    src: 'images/guldan.png'
  },
  {
    name: 'illidan',
    src: 'images/illidan.png'
  },
  {
    name: 'khadgar',
    src: 'images/khadgar.png'
  },
  {
    name: 'magni',
    src: 'images/magni.png'
  },
  {
    name: 'maiev',
    src: 'images/maiev.png'
  },
  {
    name: 'sylvanas',
    src: 'images/sylvanas.png'
  },
  {
    name: 'varian',
    src: 'images/varian.png'
  },
  {
    name: 'volgin',
    src: 'images/volgin.png'
  }
];

const gameContainer = document.getElementById("game");
const body = document.querySelector('body');
const pageCover1 = document.createElement('div');
const pageCover2 = document.querySelector('#game-over-menu');
const startOver = document.querySelector('#start-over');
const allImgs = document.getElementsByTagName('img');
let card1 = '';
let card2 = '';
let matchedCards = 0;

// shuffle array of characters
function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

// create divs for characters
function createDivsForCharacters() {
  for (let character of characters) {
    const newDiv = document.createElement("div");
    const newImg = document.createElement('img');

    newImg.setAttribute('src',character.src);
    newImg.setAttribute('class','hidden');
    newDiv.setAttribute('id',character.name);
    newDiv.appendChild(newImg);
    gameContainer.append(newDiv);

    // revealing images on click
    newDiv.addEventListener("click", function(e) {
      newDiv.children[0].className = '';

      // comparing if the 2 cards match
      if(card1 === '' || card2 === '') {
        if(card1 === '') {
          card1 = newDiv;
        } else if(card2 === '') {
          card2 = newDiv;
          if(card1.innerHTML === card2.innerHTML) {
            matchedCards += 2;
            card1 = '';
            card2 = '';
          } else {
            setTimeout(function() {
              card1.children[0].className = 'hidden';
              card2.children[0].className = 'hidden';
              card1 = '';
              card2 = '';
            },500)
          }
        
        }
        
      }
      // check if all cards were matched
      if(matchedCards === characters.length) {
        pageCover2.className = '';
        pageCover1.setAttribute('id','cover');
        body.style.backgroundColor = 'black';
        body.appendChild(pageCover1);
      }
    });
  }
  
}

startOver.addEventListener('click', function() {
  location.reload();
})

// when the DOM loads
createDivsForCharacters(shuffle(characters));