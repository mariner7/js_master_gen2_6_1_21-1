// Prototipo

const acceptedTypes = ['guerrero', 'mago', 'arquero']

// JSDOC

/**
 * 
 * @param {Object} player - Player information
 * @param {string} player.name - The name of the player
 * @param {string} player.type - The type of the player. Can be any of [guerrero,mago,arquero]
 * @param {number} player.playerNumber - The current number of the player
 * @return instance of new player
 */

const Player = function({ 
    name,
    type = 'guerrero',
    playerNumber,
}){
    // Constructor
    if(!name){
        throw new Error('"name" no puede quedar vacío')
    }

    if(!acceptedTypes.includes(type)){
        throw new Error(`"type" debe ser de tipo [${acceptedTypes.toString()}]`)
    }

    document.getElementById(`player_${playerNumber}_name`).innerHTML = name;

    this.name = name;
    this.type = type;
    this.playerNumber = playerNumber;
    this.currentHP = 1000;
    this.lastAttackDamage = 0;
}

Player.prototype.doDamage = function(target) {
    const damage = `${this.name} hizo ${this.lastAttackDamage} de daño a ${target.name}`;
    
    const color = this.playerNumber === 1 ? 'green' : 'orange'
    Logger.printOnConsole({ log: damage, color })
    Logger.appendLog({
       log: damage,
       color, 
    })

    target.currentHP -= this.lastAttackDamage;
    target.updateCurrentHP()
}

Player.prototype.calculateDamage = function(){
    this.lastAttackDamage = Number(Math.random() * 50).toFixed(0)
}

Player.prototype.isDead = function(){
    return this.currentHP <= 0;
}

Player.prototype.updateCurrentHP = function(){
    const validHP = this.currentHP < 0 ? 0 : this.currentHP;
    document.getElementById(`player_${this.playerNumber}_hp`)
        .style.width = `${(validHP * 100)/1000}%`
}