import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';

// Constants
const floorSize = 10;

// Set up scene
const scene = new THREE.Scene();

// Set up camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.add(camera);

// Set up renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set up floor
const floorGeometry = new THREE.PlaneGeometry(floorSize, floorSize);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = Math.PI / 2;
scene.add(floor);

// Add grid
const grid = new THREE.GridHelper(floorSize, 10, 0x000000, 0x000000);
grid.material.opacity = 0.2;
grid.material.transparent = true;
scene.add(grid);

// Set up cube with different materials for front and back faces
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterials = [
    new THREE.MeshBasicMaterial({ color: 0x000000 }), // Right face (black)
    new THREE.MeshBasicMaterial({ color: 0x000000 }), // Left face (black)
    new THREE.MeshBasicMaterial({ color: 0x000000 }), // Top face (black)
    new THREE.MeshBasicMaterial({ color: 0x000000 }), // Bottom face (black)
    new THREE.MeshBasicMaterial({ color: 0x000000 }), // Front face (black)
    new THREE.MeshBasicMaterial({ color: 0xffffff }), // Back face (white)
];
const cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
cube.position.y = cubeGeometry.parameters.height / 2; // Adjust the height based on your cube size
scene.add(cube);

// Set up initial camera offset
const offset = new THREE.Vector3(0, 2, -5);



// Handle keyboard input
const keyboardState = {
    forward: false,
    backward: false,
    leftRotate: false,
    rightRotate: false,
    moveLeft: false,
    moveRight: false,
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
    }
}

// Update function
const update = () => {
    requestAnimationFrame(update);

    // Move cube with arrow keys
    const speed_move = 0.05;
    const speed_rot = 0.01;

    const newPosition = cube.position.clone();

    if (keyboardState.forward) {
        const forwardVector = new THREE.Vector3(0, 0, speed_move);
        forwardVector.applyQuaternion(cube.quaternion);
        newPosition.add(forwardVector);
    }
    if (keyboardState.backward) {
        const backwardVector = new THREE.Vector3(0, 0, -speed_move);
        backwardVector.applyQuaternion(cube.quaternion);
        newPosition.add(backwardVector);
    }
    if (keyboardState.leftRotate) {
        cube.rotation.y += speed_rot;
    }
    if (keyboardState.rightRotate) {
        cube.rotation.y -= speed_rot;
    }
    if (keyboardState.moveLeft) {
        const leftVector = new THREE.Vector3(speed_move, 0, 0);
        leftVector.applyQuaternion(cube.quaternion);
        newPosition.add(leftVector);
    }
    if (keyboardState.moveRight) {
        const rightVector = new THREE.Vector3(-speed_move, 0, 0);
        rightVector.applyQuaternion(cube.quaternion);
        newPosition.add(rightVector);
    }

    // Ensure the cube stays within the grid and floor boundaries
    const halfFloorSize = floorSize / 2;

    newPosition.x = Math.min(halfFloorSize, Math.max(-halfFloorSize, newPosition.x));
    newPosition.z = Math.min(halfFloorSize, Math.max(-halfFloorSize, newPosition.z));

    cube.position.copy(newPosition);

    // Update camera position to follow the cube's black face
    rotatedOffset = offset.clone().applyQuaternion(cube.quaternion);
    camera.position.copy(cube.position).add(rotatedOffset);
    camera.lookAt(cube.position);

    // Render scene
    renderer.render(scene, camera);
};

// Run the update function
update();
