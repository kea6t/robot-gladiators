// fight function declaration
var fight = function (enemy) {

    while (enemy.health > 0 && playerInfo.health > 0) {
        // ask the player if they'd like to fight or skip.
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to chose. ");

        // If player picks "skip" then confirm and then stop.
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip the fight
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // If yes (true), leave fight
            if (confirmSkip) {
                // alerts the player that they are skipping the fight
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                //Subtract money from playerInfo.money for skipping the fight
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money ", playerInfo.money);
                break;
            }
        }
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        // Remove enemy's health by subtracting the amount set in the playerInfo.attack variable.
        enemy.health = Math.max(0, enemy.health - damage);
        // Log a resulting message to the console so we know that the code is working.
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining. ");
        // Check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died. ");

            // award player money for winning
            playerInfo.money = playerInfo.money + 20;
            // leave while() loop since enemy is defeated
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left. ");
        }
        // generate random damage value based on enemy's attack power
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        // Remove player's health by subtracting the amount set in the enemy.attack variable.
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining. ");
        // Check player's health and update
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died. ");
            // leave while() loop sine player is dead.
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left. ");
        }
    } // end while loop
}; // end fight function


// start game function
var startGame = function () {
    // Reset player stats
    playerInfo.reset();
    for (var i = 0; i < enemyInfo.length; i++) {
        // If player is still alive, keep on fighting.
        if (playerInfo.health > 0) {
            // let the players know which round they are in. Array starts at 0 so we added one to it.
            window.alert("Welcome to Robot Gladiator! Round " + (i + 1));
            // Pick new enemy to fight based on index of the enemy.name array
            var pickedEnemyObj = enemyInfo[i];
            // reset enemy.health before starting a new Fight
            pickedEnemyObj.health = randomNumber(40, 60);
            // debugger to pause script from running and check what's going on at the moment in the code
            // debugger;

            // pass the pickedenemy.name variable's into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);

            // if we're not the last enemy in the array
            if (enemyInfo.length - 1 && playerInfo.health > 0) {
                // ask if player wants to use the store before the next round
                var storeConfirm = window.confirm("The fight is over, would you like to visit the store before the next round? ");

                // if yes, take them to shop() function
                if (storeConfirm) {
                    shop();
                }
            }

        } else {
            // alerts the players the they've lost in the battle.
            window.alert("You have lost your robot in battle! Game over! ");
            break;
        }
    }
    endGame();
};



// Function to end the entire game
var endGame = function () {
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot battle.")
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // Restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function () {
    // ask the player what the'd like to do.
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    // use switch to carry out the action
    switch (shopOptionPrompt) {

        // case 1 for refill option
        case "REFILL":
        case "refill":
            // increase health and decrease playerInfo.money
            playerInfo.refillHealth();
            break;
        // case 2 for upgrade option
        case "UPGRADE":
        case "upgrade":
            // increase player attack and decrease playerInfo.money
            playerInfo.upgradeAttack();
            break;
        // case 3 for leaving the shop
        case "LEAVE":
        case "leave": window.alert("Leaving the store. ");
            // do nothing so the function will end.
            break;
        // invalid option alert for players to pick a valid option
        default: window.alert("You did not pick a valid option. Try again ");
            // call shop again
            shop();
            break;

    }

};

// randomNumber function
var randomNumber = function (min, max) {
    // sets the random value between 0 to 20 plus 40 so it doesn't start at 0 no matter what.
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    // sets the function value so it can be used again with the updated value
    return value;
}

// Initializing variables for enemy name, health, and attack
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },

    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },

    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// get player name Function to set name
var getPlayerName = function() {
    var name = "";

    // ***************************************
    // ADD loop here with prompt and condition
    // ***************************************

    while(name === "" || name === null) {
        name = prompt("What is your Robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
}


// Creating object playerInfo for player name, health, and attack
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;

        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function () {
        if (this.money) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    }
};

// console log multiple variables at once
console.log(playerInfo.name, playerInfo.health, playerInfo.attack);




// Start the game when the page loads.
startGame();



// Game states
// "Win" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots 
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
