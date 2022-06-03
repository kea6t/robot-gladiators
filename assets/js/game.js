// Initializing variables for player name, health, and attack
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// console log multiple variables at once
console.log(playerName, playerHealth, playerAttack);

// Initializing variables for enemy name, health, and attack
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// fight function declaration
function fight() {
    // Alert player to start of fight
    window.alert("Welcome to Robot Gladiators!");
    // prompt fight alert option for player's to fight or skip.
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to chose. ");

    // if player choses to fight, then fight it is
    if (promptFight === "fight" || promptFight === "FIGHT") {

        // Remove enemy's health by subtracting the amount set in the playerAttack variable.
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that the code is working.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. ");
        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died. ");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left. ");
        }
        // Remove player's health by subtracting the amount set in the enemyAttack variable.
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. ");
        // Check player's health and update
        if (playerHealth <= 0) {
            window.alert(playerName + " has died. ");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left. ");
        }

        // If player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip the fight
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // If yes (true), leave fight
            if(confirmSkip) {
                // alerts the player that they are skipping the fight
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //Subtract money from playerMoney for skipping the fight
                playerMoney = playerMoney - 2;
            }
            // If no (false), ask question again by running fight() again
            else {
                fight();
        }
    }
};

    // Execute the fight function
    fight();