let currentOption = 1;
let menuSprites: Sprite[] = [];

game.splash("Raptor Run");

// Function to show the main menu
function showMainMenu() {
    // Clear previous menu sprites
    menuSprites.forEach(sprite => sprite.destroy());
    menuSprites = [];

    // Display menu options
    for (let i = 1; i <= 3; i++) {
        let menuText = `${i}. `;
        if (i == currentOption) {
            // Highlight the selected option
            menuText = "> " + menuText;
        }
        let menuSprite = textsprite.create(menuText);
        menuSprite.setOutline(1, 15);
        menuSprite.setFlag(SpriteFlag.RelativeToCamera, true);
        menuSprite.top = 30 + (i - 1) * 20;
        menuSprites.push(menuSprite);
    }
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
        info.setScore(0);
        game.showLongText("Game Started!", DialogLayout.Top);
    } else if (option == 2) {
        // Instructions
        game.showLongText("Press the A button to jump and the B button to duck", DialogLayout.Top);
    } else if (option == 3) {
        // Exit
        game.over(false, effects.dissolve);
    }
}
