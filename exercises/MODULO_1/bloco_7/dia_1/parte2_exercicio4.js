const replaceX = (stringWithX, replaceTheX) => stringWithX.replace('x', replaceTheX);

let skillsArray = ['HTML', 'CSS', 'JS', 'Git & GitHub', 'Lógica de Programação'];

const concatenateStrings = string => {
  let sortSkillsArray = skillsArray.sort();
  let newString = `${string} Minhas cincos principais habilidades são:`
  for (let index = 0; index < sortSkillsArray.length; index += 1) {
    newString += `\n ${sortSkillsArray[index]}`;
  }
  console.log(newString);
}

concatenateStrings(replaceX('Tryber x aqui!', 'Alan'));