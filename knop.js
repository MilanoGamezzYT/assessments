teller = 0
var naam = prompt('Wat is je naam?');

var clickmebutton = document.createElement('button');
clickmebutton.innerHTML = 'Klik Hier!';
document.getElementById('knop').appendChild(clickmebutton);

clickmebutton.addEventListener('click', function() {
  var message = 'Welkom ' + naam + '!';
  var welkomElement = document.getElementById('welkom');
  welkomElement.innerHTML = message;
  teller += 1
  if (teller == 2) {
    clickmebutton.remove()
  }
});




