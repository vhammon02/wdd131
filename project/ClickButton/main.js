// declared global variables

let points = 0;
let clickValue = 1;
let passiveValue = 0;
let lifetimePoints = 0;





function passivePoints(increaseBy) {
  passiveValue += increaseBy;
  console.log("Passive points activated! +" + increaseBy + "/sec");
}

function increasePassivePoints(multiplyBy) {
  passiveValue *= multiplyBy;
  document.getElementById("passiveValue").textContent = "Pts per Second: " + passiveValue;
}

// added array of objects for upgrades.
const upgrades = [
  {
    id: "upgrade1",
    widgetId: "cubeWdg",
    cost: 10,
    purchased: false,
    code: () => passivePoints(1)
  },
  {
    id: "upgrade2",
    widgetId: "circWdg",
    cost: 20,
    purchased: false,
    code: () => increaseClickPoints(2)
  },
  {
    id: "upgrade3",
    widgetId: "xWdg",
    cost: 50,
    purchased: false,
    code: () => passivePoints(10)
  },
  {
    id: "upgrade4",
    widgetId: "lWdg",
    cost: 100,
    purchased: false,
    code: () => increasePassivePoints(5)
  },
  {
    id: "upgrade5",
    widgetId: "coolWdg",
    cost: 200,
    purchased: false,
    code: () => document.getElementById("coolWdg").style.backgroundImage = "url('images/bird.png')"
  }
];

// add function to increase clickPoints

function increaseClickPoints(increaseBy) {
    clickValue *= increaseBy;
    document.getElementById("clickValue").textContent = "Pts per Click: " + clickValue;

}

// function for adding points every second and updating the relevant stats

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

// cycles through each object in the array and will add an event listener to them
// if there are enough point on click, it will subtract the cost and set it to purchased
// it then runs the functtion that is stored in the code part of the object
// and will disable the button and change the text to show that it was purchased.
upgrades.forEach(function(upgrade) {
    document.getElementById(upgrade.id).addEventListener("click", function() {
        if (points >= upgrade.cost && !upgrade.purchased) {
            points -= upgrade.cost;
            upgrade.purchased = true;
            upgrade.code();
            document.getElementById(upgrade.widgetId).classList.remove("hidden");
            this.disabled = true;
            this.textContent = "Upgrade Unlocked";
        }

    });
});

function checkPoints() {
    // checks to see if there is enough points to mark it as available and it hasn't been purchased yet)
  const available = upgrades.filter(function(upName) {
    return points >= upName.cost && !upName.purchased;
  });
  //remove hidden from the upgrades saved as purchased
  available.forEach(function(upName) {
    document.getElementById(upName.id).classList.remove("hidden");
  });

  // changes the hint text based on points and reveals the initial container for 
  //upgrades and widgets when you reach 10 points
  if (lifetimePoints >= 200) {
    document.getElementById("hint1").textContent = "You can unlock a friend!";
  } 
  else if (lifetimePoints >= 100) {
    document.getElementById("hint1").textContent = "You made it to 100!";
  }
    else if (lifetimePoints >= 50) {    
        document.getElementById("hint1").textContent = "You can unlock a Superb Upgrade now!";
  }
  else if (lifetimePoints >= 20) {
        document.getElementById("hint1").textContent = "Look! There's another upgrade!";
  }
  else if (lifetimePoints >= 10) {
    document.getElementById("hint1").textContent = "Use Points to Earn Upgrades!";
    document.getElementById("upgrades").classList.remove("hidden");
  } else {
    document.getElementById("hint1").textContent = "Click the button to earn points...";
  }
}


