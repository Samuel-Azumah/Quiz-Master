/*Navarro, P. F. (nd). Complete jQuery and AJAX Programming Curriculum. 
Retrieved from https://www.udemy.com/course/complete-jquery-and-ajax-programming-curriculum/learn/lecture/10717774#overview on 9th October, 2020.*/

const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
