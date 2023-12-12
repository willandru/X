// main.js

//import { initScene } from './scene.js';
//import { initScene } from './js/scene.js';
//import { initScene } from 'scene.js';
//import { initCamera } from './js/camera.js';
//import { initRenderer } from './js/renderer.js';
import { initScene } from './scene.js';
// Set up scene, camera, and renderer
const scene = new THREE.Scene();

// Initialize scene, camera, and renderer
//const { scene, camera, renderer } = initScene();

// Use an orthographic camera for an isometric view
const camera = new THREE.OrthographicCamera(
  window.innerWidth / -100,
  window.innerWidth / 100,
  window.innerHeight / 100,
  window.innerHeight / -100,
  0.1, 1000
);

// Position the camera
camera.position.set(4, 10, 10);
camera.lookAt(new THREE.Vector3(0,0, 0));

// Handle window resize
window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  camera.left = -newWidth / 100;
  camera.right = newWidth / 100;
  camera.top = newHeight / 100;
  camera.bottom = -newHeight / 100;

  camera.updateProjectionMatrix();
  renderer.setSize(newWidth, newHeight);
});

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a grid
const grid = new THREE.GridHelper(20, 20);
scene.add(grid);

// Create a floor
const floorGeometry = new THREE.PlaneGeometry(20, 20, 10, 10);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);







// Create the first character (cube) with arrow key controls
const character1Geometry = new THREE.BoxGeometry(1, 1, 1);
const character1Material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const character1 = new THREE.Mesh(character1Geometry, character1Material);
character1.position.set(0, 0.5, 0); // Start at the center of the floor
scene.add(character1);

// Define the initial movement vector for character1
let movementVector1 = new THREE.Vector3(0, 0, 0);

// Handle keyboard input for character1 movement (Arrow keys)
document.addEventListener('keydown', (event) => {
  const speed = 0.1; // Adjust the speed as needed

  switch (event.code) {
    case 'ArrowUp':
      movementVector1.z = -speed;
      break;
    case 'ArrowDown':
      movementVector1.z = speed;
      break;
    case 'ArrowLeft':
      movementVector1.x = -speed;
      break;
    case 'ArrowRight':
      movementVector1.x = speed;
      break;
  }

  // Diagonal movement for character1
  if (event.code === 'ArrowUp' && event.shiftKey) {
    movementVector1.z = -speed;
  }
  if (event.code === 'ArrowDown' && event.shiftKey) {
    movementVector1.z = speed;
  }
  if (event.code === 'ArrowLeft' && event.shiftKey) {
    movementVector1.x = -speed;
  }
  if (event.code === 'ArrowRight' && event.shiftKey) {
    movementVector1.x = speed;
  }
});

document.addEventListener('keyup', (event) => {
  // Stop movement when the key is released
  switch (event.code) {
    case 'ArrowUp':
    case 'ArrowDown':
      movementVector1.z = 0;
      break;
    case 'ArrowLeft':
    case 'ArrowRight':
      movementVector1.x = 0;
      break;
  }
});

// Update character1 position based on the movement vector
const updateCharacter1 = () => {
  // Update character1 position
  if (
    character1.position.z + movementVector1.z < 9.5 &&
    character1.position.z + movementVector1.z > -9.5
  ) {
    character1.position.z += movementVector1.z;
  }

  if (
    character1.position.x + movementVector1.x < 9.5 &&
    character1.position.x + movementVector1.x > -9.5
  ) {
    character1.position.x += movementVector1.x;
  }
};




// CHARACTER BLUE: Array to store blue boxes
const blueBoxes = [];

// Handle button click to add a new blue box
document.getElementById('addBoxButton').addEventListener('click', () => {
  // Create a new blue box
  const blueBoxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const blueBoxMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const newBlueBox = new THREE.Mesh(blueBoxGeometry, blueBoxMaterial);

  // Randomly position the new blue box within the grid
  newBlueBox.position.set(
    (Math.random() * 18) - 9,  // Random X position between -9 and 9
    0.5,
    (Math.random() * 18) - 9   // Random Z position between -9 and 9
  );

  // Add the new blue box to the scene and the array
  scene.add(newBlueBox);
  blueBoxes.push(newBlueBox);
});






// Collision counter
let collisionCounter = 0;






// Set up animation loop
const animate = function () {
  updateCharacter1();
  requestAnimationFrame(animate);

  // Check for collision between character1 and blue boxes
  for (let i = 0; i < blueBoxes.length; i++) {
    const blueBox = blueBoxes[i];
    const distance = character1.position.distanceTo(blueBox.position);
    const collisionThreshold = 1.0; // Adjust the threshold as needed

    if (distance < collisionThreshold) {
      // Collision detected: Remove the blue box from the scene
      scene.remove(blueBox);
      blueBoxes.splice(i, 1); // Remove the blue box from the array

      // Increment collision counter
      collisionCounter++;

      // Update collision counter display
      document.getElementById('collision-counter').textContent = `Collisions: ${collisionCounter}`;
    }
  }

  renderer.render(scene, camera);
};











// Start the animation loop
animate();
