let currentOption = 1;

game.splash("Raptor Run");

// Function to show the main menu
function showMainMenu() {
    game.showLongText("1. Start Game\n2. Instructions\n3. Exit", DialogLayout.Center);
}

// Show the main menu initially
showMainMenu();

// Event handler for button A to select menu options
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // Handle the selected option
    handleMenuOption(currentOption);
});

// Event handler for button B to navigate the menu options
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    // Cycle through menu options
    currentOption = (currentOption % 3) + 1;

    // Update the menu display
    showMainMenu();
});

// Event handler for button Up to move up in the menu options
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    currentOption = (currentOption - 2 + 3) % 3 + 1;

    // Update the menu display
    showMainMenu();
});

// Event handler for button Down to move down in the menu options
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    currentOption = (currentOption % 3) + 1;

    // Update the menu display
    showMainMenu();
});

// Function to handle the selected menu option
function handleMenuOption(option: number) {
    if (option == 1) {
        // Start Game
        game.reset();
        //initGround();
        //initRaptor();
        info.setScore(0);
        //end = 0;
        game.showLongText("Game Started!", DialogLayout.Top);
    } else if (option == 2) {
        // Instructions
        game.showLongText("Press the A button to jump and the B button to duck", DialogLayout.Top);
    } else if (option == 3) {
        // Exit
        game.over(false, effects.dissolve);
    }
}
