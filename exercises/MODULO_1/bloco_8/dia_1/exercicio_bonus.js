const assert = require('assert');

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
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  let damage = Math.floor((Math.random() * (dragon.strength - 15 + 1)) + 15);
  return damage
}

const warriorDamage = () => {
  let damage = Math.floor((Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1) + warrior.strength));
  return damage
}

const mageDamage = () => {
  let damage = Math.floor((Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1) + mage.intelligence));
  return damage
}

const mageDmgAndMana = () => {
  if (mage.mana => 15) {
    let object = {
    damage: mageDamage(),
    manaSpent: 15    
  } 
  } else {
    let object = {
      damage: 'Não possui mana suficiente'
      manaSpent: 0
    }
  }
  return object
}


