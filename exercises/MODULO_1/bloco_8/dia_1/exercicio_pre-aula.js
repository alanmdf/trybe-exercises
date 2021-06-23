const wakingUp = () => 'Acordando!!';

const letsDrinkCoffe = () => 'Bora tomar café!!';

const letsSleep = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(wakingUp);
doingThings(letsDrinkCoffe);
doingThings(letsSleep);