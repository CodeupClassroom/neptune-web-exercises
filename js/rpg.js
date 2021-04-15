var character = {
    class: "fighter",
    name: "Arata",
    race: "Human",
    level: 1,
    proficiencyBonus: 2,
    strength: 18,
    strengthBonus: 4,
    dexterity: 14,
    constitution: 16,
    hitPoints: 13,
    armor: "Chain Mail",
    shield: true,
    armorClass: 20,
    weapon: "Greatsword",
    minDamage: 2,
    maxDamage: 12,
    attack: function(enemy) {
        var damageRange = this.maxDamage - this.minDamage;
        var attackRoll = Math.floor(Math.random() * 20) + this.proficiencyBonus + this.strengthBonus;
        if (attackRoll > enemy.armorClass) {
            var damage = Math.floor(Math.random() * damageRange) + this.strengthBonus + this.minDamage;
            enemy.hitPoints = enemy.hitPoints - damage;
            console.log(this.name + " hit the " + enemy.type + " with their " + this.weapon + " for " + damage + " points. The " + enemy.type + " has " + enemy.hitPoints + " hit points left");
        } else {
            console.log(this.name + " missed!");
        }
    }
}


var monster = {
    type: "orc",
    strength: 16,
    strengthBonus: 3,
    hitPoints: 15,
    armorClass: 13,
    weapon: "Greataxe",
    attackBonus: 5,
    minDamage: 1,
    maxDamage: 12
}

character.attack(monster);
