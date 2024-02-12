function questionsBelowCHapter() {
  var questions = document.getElementsByClassName('questions');
  var screenWidth = window.innerWidth;

  if (screenWidth < 900) {

    Array.from(questions).forEach(function (questionsDiv) {

      questionsDiv.classList.remove('questions');
      questionsDiv.classList.add('title')

    })
  } else {
    Array.from(questions).forEach(function (questionsDiv) {

      questionsDiv.classList.add('questions');
      questionsDiv.classList.remove('title')

    })
  }
};

window.addEventListener('resize', questionsBelowCHapter);
window.addEventListener('load', questionsBelowCHapter);