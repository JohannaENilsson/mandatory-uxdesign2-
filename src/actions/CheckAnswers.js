export default function CheckAnswers(answers, questions) {
    console.log('Users answers ', answers);

    let score = 0;
    console.log(score);

    for (let i = 0; i < questions.length; i++) {
      if (questions[i].correct_answer === answers[i]) {
        console.log('They match');
        score++;
      }
    }
    console.log(score);
    return score;
  }


  