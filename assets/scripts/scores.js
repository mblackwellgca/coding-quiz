var scores = document.getElementById('scores');

function saveHighScore() {
  var initials = JSON.parse(localStorage.getItem('initials'));
    const scoresList = document.createElement('li');
    scoresList.innerText = initials.initials + "- Scored " + initials.score;
    scores.appendChild(scoresList);
}
saveHighScore();