// animation-loop.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';
import { scene, camera, renderer } from './scene-setup.js';
import { character1, movementVector1, updateCharacter1 } from './character-setup.js';
import { blueBoxes } from './blue-box-setup.js';
import { collisionCounter, incrementCollisionCounter } from './collision.js';

const animate = function () {
  updateCharacter1();
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
