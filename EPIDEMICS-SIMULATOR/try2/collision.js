// collision.js
import { scene } from './sceneSetup.js';
import { character1 } from './createCube.js';
import { blueBoxes } from './blueBox.js';

let collisionCounter = 0;

const checkCollisions = () => {
  for (let i = 0; i < blueBoxes.length; i++) {
    const blueBox = blueBoxes[i];
    const distance = character1.position.distanceTo(blueBox.position);
    const collisionThreshold = 1.0;

    if (distance < collisionThreshold) {
      scene.remove(blueBox);
      blueBoxes.splice(i, 1);
      collisionCounter++;

      document.getElementById('collision-counter').textContent = `Collisions: ${collisionCounter}`;
    }
  }
};

export { checkCollisions };
