const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 600,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  let damage = Math.floor((Math.random() * (dragon.strength - 15 + 1)) + 15);
  return damage;
};

const warriorDamage = () => {
  let damage = Math.floor((Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1) + warrior.strength));
  return damage;
};

const mageDamage = () => {
  let damage = Math.floor((Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1) + mage.intelligence));
  return damage;
};

const mageDmgAndMana = () => {
  let object = {};
  if (mage.mana >= 15) {
    object = {
    damage: mageDamage(),
    manaSpent: 15
    }
  } else {
    object = {
      damage: 0,
      manaSpent: 0
    }
  }
  return object;
};

const gameActions = {
  warriorTurn: (warriorDamage) => {
    let damage = warriorDamage();
    dragon.healthPoints -= damage;
    warrior.damage = damage;
    return battleMembers
  },
  mageTurn: (mageDmgAndMana) => {
    let object = mageDmgAndMana();
    dragon.healthPoints -= object.damage;
    mage.damage = object.damage;
    mage.mana = mage.mana > 0 ? mage.mana - object.manaSpent : 'Não possui mana suficiente';
    return battleMembers;
  },
  dragonTurn: (dragonDamage) => {
    let damage = dragonDamage();
    warrior.healthPoints = warrior.healthPoints < 0 ? warrior.healthPoints = 0 : warrior.healthPoints -= damage;
    mage.healthPoints = mage.healthPoints < 0 ? mage.healthPoints = 0 : mage.healthPoints -= damage;
    dragon.damage = damage;
    return battleMembers;
  },
  showTurnResult: () => {
    return console.log(battleMembers);
  }
};

for (let index = 1; index < 9; index += 1) {
  console.log(`Resultado do Turno ${index}:`);
  if (dragon.healthPoints <= 0) {
    console.log('Parabéns, você venceu');
    break;
  }
  if (warrior.healthPoints > 0) {
    gameActions.warriorTurn(warriorDamage);
  } else {
    console.log('O guerreiro está morto');
  }
  if (mage.healthPoints > 0) {
    gameActions.mageTurn(mageDmgAndMana);
  } else {
    console.log('O mago está morto');
  }
  if (warrior.healthPoints <= 0 && mage.healthPoints <= 0) {
    console.log('Que pena, você perdeu');
    break;
  }
  if (dragon.healthPoints > 0) {
    gameActions.dragonTurn(dragonDamage);
  }
  if (dragon.healthPoints <= 0) {
    dragon.healthPoints = 0;
  }
  if (warrior.healthPoints <= 0) {
    warrior.healthPoints = 0;
  }
  if (mage.healthPoints <= 0) {
    mage.healthPoints = 0;
  }
  gameActions.showTurnResult()
}





