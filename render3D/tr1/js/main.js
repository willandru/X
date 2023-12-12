import { initScene } from './scene.js';
import { createCharacters } from './characters.js';
import { handleKeyboardInput } from './input.js';
import { animate } from './animation.js';

// Initialize scene, camera, and renderer
const { scene, camera, renderer } = initScene();

// Create characters
const { character1, character2 } = createCharacters(scene);

// Set up animation loop
animate(scene, camera, renderer, character1, character2);

// Handle keyboard input for character movement
document.addEventListener('keydown', (event) => {
  handleKeyboardInput(event, character1, character2);
});

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

