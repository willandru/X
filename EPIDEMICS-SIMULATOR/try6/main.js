import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';
import { createFloor } from './floor.js';
import { createGrid } from './grid.js';
import { createCube } from './cube.js';
import { setupKeyboardListeners } from './keyboard.js';
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

// Handle keyboard input
const keyboardState = setupKeyboardListeners();

// Run the update function
update(scene, camera, renderer, cube, offset, keyboardState, floorSize);
