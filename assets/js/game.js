// Initializing variables for player name, health, and attack
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// console log multiple variables at once
console.log(playerName, playerHealth, playerAttack);

// Initializing variables for enemy name, health, and attack
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// fight function declaration
var fight = function (enemyName) {

    while (enemyHealth > 0 && playerHealth > 0) {
        // ask the player if they'd like to fight or skip.
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to chose. ");

        // If player picks "skip" then confirm and then stop.
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip the fight
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // If yes (true), leave fight
            if (confirmSkip) {
                // alerts the player that they are skipping the fight
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //Subtract money from playerMoney for skipping the fight
                playerMoney = playerMoney - 10;
                console.log("playerMoney ", playerMoney);
                break;
            }
        }
        // Remove enemy's health by subtracting the amount set in the playerAttack variable.
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that the code is working.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. ");
        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died. ");

            // award player money for winning
            playerMoney = playerMoney + 20;
            // leave while() loop since enemy is defeated
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left. ");
        }
        // Remove player's health by subtracting the amount set in the enemyAttack variable.
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. ");
        // Check player's health and update
        if (playerHealth <= 0) {
            window.alert(playerName + " has died. ");
            // leave while() loop sine player is dead.
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left. ");
        }
    } // end while loop
}; // end fight function


var startGame = function () {
    // Reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        // If player is still alive, keep on fighting.
        if (playerHealth > 0) {
            // let the players know which round they are in. Array starts at 0 so we added one to it.
            window.alert("Welcome to Robot Gladiator! Round " + (i + 1));
            // Pick new enemy to fight based on index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            // reset enemyHealth before starting a new Fight
            enemyHealth = 50;
            // debugger to pause script from running and check what's going on at the moment in the code
            // debugger;

            // pass the pickedEnemyName variable's into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);

        } else {
            window.alert("You have lost your robot in battle! Game over! ");
            break;
        }
    }
    endGame();
};



// Function to end the entire game
var endGame = function () {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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




// Start the game when the page loads.
startGame();



// Game states
// "Win" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots 
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
