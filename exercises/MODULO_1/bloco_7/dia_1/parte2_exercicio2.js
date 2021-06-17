const showLongestWord = sentence => {
  let sentenceArray = sentence.split(' ');
  let longestWord;
  let longestWordLength = 0;
  let longestWordIndex = 0;
  for (let index = 0; index < sentenceArray.length; index += 1) {
    if (sentenceArray[index].length > longestWordLength) {
      longestWordIndex = index;
      longestWordLength = sentenceArray[index].length;
      longestWord = sentenceArray[index];
    }
  }
  console.log(longestWord);
}

showLongestWord('Abigobal de Freitas Silva');