

export default function answerGenarate(correctAnswer) {
    var answersArray = [correctAnswer];

    // Generate three unique random numbers between 0 and 9 excluding the correct answer
    while (answersArray.length < 4) {
      var randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber !==correctAnswer && !answersArray.includes(randomNumber)) {
        answersArray.push(randomNumber);
      }
    }
   return shuffleArray(answersArray)
}

const shuffleArray=(array)=> {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array
}
