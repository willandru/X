import * as THREE from 'three';

export function checkCollisions(character1, character2, scene) {
  const distance = character1.position.distanceTo(character2.position);
  const collisionThreshold = 1.0;

  if (distance < collisionThreshold) {
    // Collision detected: Remove character2 from the scene
    scene.remove(character2);
  }
}
