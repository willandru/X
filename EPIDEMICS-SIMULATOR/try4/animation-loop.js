// animate-loop.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';
import { scene, renderer, floorSize } from './scene-setup.js';
import { createCamera } from './camera-setup.js';
import { character1, movementVector1, updateCharacter1 } from './character-setup.js';
import { blueBoxes } from './blue-box-setup.js';
import { collisionCounter, incrementCollisionCounter } from './collision.js';

const camera = createCamera();

const animate = function () {
  updateCharacter1();

  // Update the camera position to follow the character
  const distanceFromCharacter = 500; // Adjust as needed
  const heightAboveCharacter = 500; // Adjust as needed

  camera.position.set(
    character1.position.x + distanceFromCharacter,
    character1.position.y + heightAboveCharacter,
    character1.position.z + distanceFromCharacter
  );
  camera.lookAt(character1.position);

  requestAnimationFrame(animate);

  for (let i = 0; i < blueBoxes.length; i++) {
    const blueBox = blueBoxes[i];
    const distance = character1.position.distanceTo(blueBox.position);
    const collisionThreshold = 1.0;

    if (distance < collisionThreshold) {
      scene.remove(blueBox);
      blueBoxes.splice(i, 1);
      incrementCollisionCounter();
      document.getElementById('collision-counter').textContent = `Collisions: ${collisionCounter}`;
    }
  }

  renderer.render(scene, camera);
};

export { animate };
