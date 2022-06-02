// Initializing variables for player name, health, and attack
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

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

    // Subtract the value of 'PlayerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
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
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
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

    
};

// Execute the fight function
fight();