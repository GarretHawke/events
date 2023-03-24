let holes = document.querySelectorAll('.hole');
let lastHole;
const TIME = 1500;

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
  addActiveHole();
}

addActiveHole();

setInterval(() => {
  changeActiveHole();
}, TIME);
