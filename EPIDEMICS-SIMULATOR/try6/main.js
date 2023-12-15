// main.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';
import { createFloor } from './floor.js';
import { createGrid } from './grid.js';
import { createCube } from './cube.js';
import { setupKeyboardListeners } from './keyboard.js';
import { createChicken } from './chicken.js';
import { update } from './update.js';

// Constants
const floorSize = 100;

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
createFloor(scene, floorSize);

// Add grid
createGrid(scene, floorSize);

// Set up cube with different materials for front and back faces
const cube = createCube();
scene.add(cube);

// Set up initial camera offset
const offset = new THREE.Vector3(0, 2, -5);

// Set up chickens
const chickens = [];
for (let i = 0; i < 5; i++) {
    const chicken = createChicken();
    scene.add(chicken);
    chickens.push(chicken);
}

// Handle keyboard input
const keyboardState = setupKeyboardListeners();

// Create clock for controlling time delta
const clock = new THREE.Clock();

// Update function for all monsters
const updateMonsters = () => {
    const delta = clock.getDelta();

    chickens.forEach((chicken) => {
        if (chicken.update) {
            chicken.update(delta);
        }
    });

    // Add similar update logic for other monsters (rabbits, sheeps) here
};

// Update function
const mainUpdate = () => {
    update(scene, camera, renderer, cube, offset, keyboardState, floorSize, updateMonsters);

    // Render scene
    renderer.render(scene, camera);
};

// Animation loop with setInterval
const intervalId = setInterval(() => {
    // Update monsters
    updateMonsters();

    // Run the main update function
    mainUpdate();
}, 1000 / 60); // Adjust the interval as needed for the desired frame rate (e.g., 60 frames per second)

// Stop the animation loop after a certain duration (e.g., 10 seconds)
setTimeout(() => {
    clearInterval(intervalId);
}, 100000);
