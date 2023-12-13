// character-setup.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';
import { scene, floorSize } from './scene-setup.js';


const character1Geometry = new THREE.BoxGeometry(1, 1, 1);
const character1Material = new THREE.MeshBasicMaterial({ color: 0x000000});
const character1 = new THREE.Mesh(character1Geometry, character1Material);
character1.position.set(0, 0.5, 0);
scene.add(character1);

let movementVector1 = new THREE.Vector3(0, 0, 0);

document.addEventListener('keydown', (event) => {
  const speed = 0.5;

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

const updateCharacter1 = () => {
  const characterHalfSize = 0.5;

  if (
    character1.position.z + movementVector1.z < floorSize / 2 - characterHalfSize &&
    character1.position.z + movementVector1.z > -floorSize / 2 + characterHalfSize
  ) {
    character1.position.z += movementVector1.z;
  }

  if (
    character1.position.x + movementVector1.x < floorSize / 2 - characterHalfSize &&
    character1.position.x + movementVector1.x > -floorSize / 2 + characterHalfSize
  ) {
    character1.position.x += movementVector1.x;
  }
};

export { character1, movementVector1, updateCharacter1 };
