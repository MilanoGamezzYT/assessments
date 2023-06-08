var images = [
    "pictures/Verstappen.png",
    "pictures/Leclerc.png",
    "pictures/Alonso.png",
    "pictures/Russell.png",
    "pictures/Norris.png",
    "pictures/Hulkenberg.png",
    "pictures/Bottas.png",
    "pictures/Albon.png",
    "pictures/Gasly.png",
    "pictures/Devries.png"
  ];
  
  images = images.concat(images);
  
  var numCards = 20;
  
  var flippedCards = 0;
  
  var matchedPairs = 0;
  
  var restarts = 0;
  
  var gridContainer = document.querySelector(".grid-container");
  
  var scoreElement = document.querySelector(".score");
  
  var flipped = [];
  
  var restartButton = document.querySelector("button");
  
  restartButton.addEventListener("click", restart);
  
  createCards();
  
  var score = 0;
  
  function createCards() {
    images = shuffleArray(images);
  
    for (var i = 0; i < numCards; i++) {
      var card = document.createElement("div");
      card.className = "card";
      card.dataset.index = i;
      card.addEventListener("click", flipCard);
  
      var front = document.createElement("div");
      front.className = "front";
      var frontImage = document.createElement("img");
      frontImage.className = "front-image";
      frontImage.src = images[i];
      front.appendChild(frontImage);
  
      var back = document.createElement("div");
      back.className = "back";
  
      card.appendChild(front);
      card.appendChild(back);
      gridContainer.appendChild(card);
    }
  }
  
  function flipCard(event) {
    var card = event.target.parentElement;
    if (!card.classList.contains("flipped") && flipped.length < 2) {
      card.classList.add("flipped");
      flipped.push(card);
  
      if (flipped.length === 2) {
        var card1 = flipped[0];
        var card2 = flipped[1];
        var index1 = card1.dataset.index;
        var index2 = card2.dataset.index;
        var image1 = images[index1];
        var image2 = images[index2];
  
        if (image1 === image2) {
          card1.removeEventListener("click", flipCard);
          card2.removeEventListener("click", flipCard);
          flipped = [];
          matchedPairs++;
  
          if (matchedPairs === numCards / 2) {
            setTimeout(function () {
              alert("Gefeliciteerd! Je hebt gewonnen!");
              score++;
              scoreElement.textContent = "Score: " + score;
            }, 500);
          }
        } else {
          setTimeout(function () {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            flipped = [];
          }, 1000);
        }
      }
    }
  }
  
  function restart() {
    while (gridContainer.firstChild) {
      gridContainer.firstChild.remove();
    }
  
    flippedCards = 0;
    matchedPairs = 0;
  
    createCards();
  
  }
  
function shuffleArray(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}