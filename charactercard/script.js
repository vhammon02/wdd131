const character = {
  name: "Baron Jaeger",
  class: "Wizard",
  level: 23,
  health: 100,
  image: "images/Baron_Jaeger.jpg"
};

function updateCard() {
  document.querySelector(".name").textContent = character.name;
  document.querySelector(".class").textContent = `Class: ${character.class}`;
  document.querySelector(".level").textContent = `Level: ${character.level}`;
  document.querySelector(".image").src = character.image;

  if (character.health <= 0) {
    document.querySelector(".health").textContent = `${character.name} has died.`;
  } else {
    document.querySelector(".health").textContent = `Health: ${character.health}`;
  }
}

function attacked() {
  character.health -= 20;
  if (character.health < 0) {
    character.health = 0;
  }
  updateCard();
}

function levelUp() {
  character.level += 1;
  updateCard();
}

document.querySelector(".attack-btn").addEventListener("click", attacked);
document.querySelector(".levelup-btn").addEventListener("click", levelUp);
updateCard();
