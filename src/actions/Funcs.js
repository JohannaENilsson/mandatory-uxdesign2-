import axios from 'axios';

export function GetAPI() {
  return axios.get('https://opentdb.com/api.php?amount=10');
}

export function CheckAnswers(answers, questions) {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    if (questions[i].correct_answer === answers[i]) {
      score++;
    }
  }

  return score;
}
