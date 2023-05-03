const main = document.querySelector('main');
const holes = document.querySelectorAll('.hole');
const wrapper = document.querySelector('.layout-4-column');
let lastHole;
const appearingTime = 1000;

let score = 0;
let loserScore = 0;
let deadCount = document.querySelector('.dead');
let survivedCount = document.querySelector('.survived');


const addActiveHole = () => {
  const randomIndex = Math.floor(Math.random() * holes.length);
  const activeHole = holes[randomIndex];

  if (activeHole === lastHole) {
    return addActiveHole();
  }

  lastHole = activeHole;
  activeHole.classList.add('hole_has-devil');
}

const removeActiveHole = () => {
  holes.forEach(item => item.classList.remove('hole_has-devil'));
}

const changeActiveHole = () => {
  removeActiveHole();
  setTimeout(addActiveHole(), appearingTime);
  //addActiveHole();
}

//addActiveHole();

const setTime = setInterval(() => {
  changeActiveHole();
}, appearingTime);

const countingScore = () => ++score;
const countingLoserScore = () => ++loserScore;

const endGame = () => {
  wrapper.classList.add('invisible');
  main.classList.add('lose');
  clearInterval(setTime);
}

main.addEventListener('mousedown', () => {
  survivedCount.innerHTML = countingLoserScore();
  if (loserScore >= 5) {
    endGame();
  }
});

holes.forEach(hole => {
  hole.addEventListener('mousedown', (event) => {
    event.stopPropagation();
    if (hole.classList.contains('hole_has-devil')) {
      deadCount.innerHTML = countingScore();
      removeActiveHole();
      setTime;
    }
  });
});
