function questionsBelowChapter() {
  var questions = document.getElementsByClassName('questions');
  var screenWidth = window.innerWidth;

  if (screenWidth < 900) {
    Array.from(questions).forEach(function (questionsDiv) {

      questionsDiv.classList.remove('questions');
      questionsDiv.classList.add('title')
      questionsDiv.classList.add('wasAQuestion')

    })
  } else {
    var questions = document.getElementsByClassName('wasAQuestion');
    Array.from(questions).forEach(function (questionsDiv) {

      questionsDiv.classList.remove('wasAQuestion');
      questionsDiv.classList.add('questions')
      questionsDiv.classList.remove('title')
    })
  }
};

window.addEventListener('resize', questionsBelowChapter);
window.addEventListener('load', questionsBelowChapter);