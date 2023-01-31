
const data = require('./data');
const { dragon, warrior, mage } = data;

const warriorDamage = () => {
  const minDamage = warrior.strength;
  const maxDamage = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg));
  let hit;
  maxDamage > minDamage ? hit = maxDamage : hit = minDamage;
  return hit;
}

const dragonDamage = () => {
  const minDamage = 15;
  const hit = Math.floor((Math.random() * minDamage) + minDamage );
  return hit;
}

const mageDamage = () => {
  const minDamage = mage.intelligence;
  const maxDamage = Math.floor(Math.random() * mage.intelligence * 2);
  let hit;
  maxDamage > minDamage ? hit = maxDamage: hit = minDamage;

  const status = {
    manaSpent: 15,
    damageDelt: hit,
  }

  if(mage.mana < 15) {
    return 'Not enough mana!';
  } else {
    return status;
  }
}

const gameActions = {
  warriorTurn: () => {
    const damage = warriorDamage();
    warrior.damage = damage;
    dragon.healthPoints - warrior.damage;
  },
};


console.log(gameActions.warriorTurn());