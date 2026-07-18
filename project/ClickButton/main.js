let points = 0;
let clickValue = 1;
let passiveValue = 0;
let lifetimePoints = 0;

// add function to increase clickPoints

function increaseClickPoints(increaseBy) {
    clickValue *= increaseBy;
    document.getElementById("clickValue").textContent = "Pts per Click: " + clickValue;

}

setInterval(function() {
    points += passiveValue;
    lifetimePoints += passiveValue;
    document.getElementById("Total").textContent = "Pts: " + points;
    document.getElementById("Lifetime").textContent = "Lifetime Pts: " + lifetimePoints;
    document.getElementById("passiveValue").textContent = "Pts per Second: " + passiveValue;
  }, 1000);

// add points on click

document.getElementById("clickButton").addEventListener("click", function() {
  points += clickValue;
  lifetimePoints += clickValue;
  document.getElementById("Total").textContent = "Pts: " + points;
  document.getElementById("Lifetime").textContent = "Lifetime Pts: " + lifetimePoints;
  checkPoints();
});

// check points value to reveal upgrades

function checkPoints() {
   if (points >= 200) {
    document.getElementById("upgrade5").classList.remove("hidden");
  }
    else if (points >= 100) {
    document.getElementById("upgrade4").classList.remove("hidden");
    document.getElementById("lWdg").classList.remove("hidden");
  }
    else if (points >= 50) {
    document.getElementById("upgrade3").classList.remove("hidden");
    document.getElementById("xWdg").classList.remove("hidden");
  } else if (points >= 20) {
    document.getElementById("upgrade2").classList.remove("hidden");
    document.getElementById("circWdg").classList.remove("hidden");
  } else if (points >= 10) {
    document.getElementById("hint1").textContent = "Use Points to Earn Upgrades!";
    document.getElementById("upgrades").classList.remove("hidden");
    document.getElementById("upgrades").style.display = "grid";
    document.getElementById("widgets").classList.remove("hidden");
  } else {
    document.getElementById("hint1").textContent = "Click the button to earn points...";
  }
}

// Upgrade 1: add +1 points every second

function passivePoints(increaseBy) {
  passiveValue += increaseBy;
  console.log("Passive points activated! +" + increaseBy + "/sec");
}

function increasePassivePoints(multiplyBy) {
  passiveValue *= multiplyBy;
  document.getElementById("passiveValue").textContent = "Pts per Second: " + passiveValue;
}

document.getElementById("upgrade1").addEventListener("click", function() {
  if (points >= 10) {
    points -= 10;
    passivePoints(1);
    this.disabled = true;
    this.textContent = "Passive pts active";
  }
});

// Upgrade 2: add x2 points per click

document.getElementById("upgrade2").addEventListener("click", function() {
  if (points >= 20) {
    points -= 20;
    console.log("Upgrade 2 purchased! Passive points activated.");
    increaseClickPoints(2);
    this.disabled = true; // prevent buying it again / stacking intervals
    this.textContent = "Pts upgrade active";
  }
});


// Upgrade 3: add +10 points every second

document.getElementById("upgrade3").addEventListener("click", function() {
  if (points >= 50) {
    points -= 50;
    passivePoints(10); // removed the duplicate manual += 10
    this.disabled = true;
    this.textContent = "Super passive pts active";
  }
});

// Upgrade 4: add x5 more points per click

document.getElementById("upgrade4").addEventListener("click", function() {
  if (points >= 100) {           
    points -= 100;               
    increasePassivePoints(5);    
    this.disabled = true;
    this.textContent = "Mega pts upgrade active";
  }
});

// Upgrade 5: add friend

document.getElementById("upgrade5").addEventListener("click", function() {
  if (points >= 200) {
    points -= 200;
    document.getElementById("coolWdg").classList.remove("hidden");

    this.disabled = true;
  }
});