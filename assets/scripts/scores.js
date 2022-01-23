var scores = document.getElementById('scores');

function savehighScore() {
  var highScore = JSON.parse(localStorage,getItem('highScore'));
    const scoresList = document.createElement('li');
    scoresList.innerText = highScore.initials + " - " + highScore.timeLeft;
    scores.appendChild(scoresList);
}
savehighScore();