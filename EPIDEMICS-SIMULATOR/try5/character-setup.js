import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';
import { scene } from './scene-setup.js';

const characterGeometry = new THREE.BoxGeometry(1, 1, 1);
const characterMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const character = new THREE.Mesh(characterGeometry, characterMaterial);
character.position.set(0, 0.5, 0);
scene.add(character);

let movementVector = new THREE.Vector3(0, 0, 0);

document.addEventListener('keydown', (event) => {
  const speed = 0.1;

  switch (event.code) {
    case 'ArrowUp':
      movementVector.z = -speed;
      break;
    case 'ArrowDown':
      movementVector.z = speed;
      break;
    case 'ArrowLeft':
      movementVector.x = -speed;
      break;
    case 'ArrowRight':
      movementVector.x = speed;
      break;
  }
});

document.addEventListener('keyup', (event) => {
  switch (event.code) {
    case 'ArrowUp':
    case 'ArrowDown':
      movementVector.z = 0;
      break;
    case 'ArrowLeft':
    case 'ArrowRight':
      movementVector.x = 0;
      break;
  }
});

const updateCharacter = () => {
  character.position.add(movementVector);
};

export { character, updateCharacter };
