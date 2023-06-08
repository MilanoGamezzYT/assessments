










coureurs = ['Max verstappen','Lewis Hamilton','Lando Norris','Alex Albon','Nyck de Vries','Nico Hulkenberg','Charles Leclerc','Fernando Alonso','Valtteri Bottas','Piere Gasly'];
coureurs = shuffle(coureurs);
function shuffle(array){
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

    randomIndex = Math. floor (Math. random() * currentIndex);
    currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}