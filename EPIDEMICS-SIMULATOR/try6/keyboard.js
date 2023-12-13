export function setupKeyboardListeners() {
    const keyboardState = {
        forward: false,
        backward: false,
        leftRotate: false,
        rightRotate: false,
        moveLeft: false,
        moveRight: false,
        space: false, // New variable for spacebar
    };

    document.addEventListener('keydown', (event) => {
        handleKeyPress(event.key, true);
    });

    document.addEventListener('keyup', (event) => {
        handleKeyPress(event.key, false);
    });

    function handleKeyPress(key, value) {
        switch (key) {
            case 'w':
                keyboardState.forward = value;
                break;
            case 's':
                keyboardState.backward = value;
                break;
            case 'a':
                keyboardState.leftRotate = value;
                break;
            case 'd':
                keyboardState.rightRotate = value;
                break;
            case 'q':
                keyboardState.moveLeft = value;
                break;
            case 'e':
                keyboardState.moveRight = value;
                break;
            case ' ':
                keyboardState.space = value; // Spacebar
                break;
        }
    }

    return keyboardState;
}
