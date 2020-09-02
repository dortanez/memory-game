const gameContainer = document.getElementById("game");

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

let card1 = '';
let card2 = '';


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

function createDivsForCharacters(characterArray) {
  for (let character of characterArray) {
    const newDiv = document.createElement("div");
    const newImg = document.createElement('img');
    const allDivs = document.querySelectorAll('div.character');

    newImg.setAttribute('src',character.src)
    newImg.setAttribute('id',character.name)
    newDiv.classList.add('character');

    gameContainer.append(newDiv);

    newDiv.addEventListener("click", function(e) {
      newDiv.appendChild(newImg);
      if(card1 === '') {
        card1 = e.target.children[0].getAttribute('id');
      } else if(card2 === '') {
        card2 = e.target.children[0].getAttribute('id');  
      }
      if(card1 === card2) {
        console.log('yes');
        card1 = '';
        card2 = '';
          for(let divs of allDivs) {
            divs.innerHTML = '';
          }
      } else {
        for(let divs of allDivs) {
          divs.innerHTML = '';
          card1 = '';
          card2 = '';
          }
        }
    });

    
  }
}


// when the DOM loads
createDivsForCharacters(shuffle(characters));






