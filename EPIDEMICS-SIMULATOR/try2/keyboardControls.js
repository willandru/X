// keyboardControls.js
import { character1 } from './createCube.js';

const movementVector1 = new THREE.Vector3(0, 0, 0);

document.addEventListener('keydown', (event) => {
  const speed = 0.01;

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
  if (character1.position.z + movementVector1.z < 9.5 && character1.position.z + movementVector1.z > -9.5) {
    character1.position.z += movementVector1.z;
  }

  if (character1.position.x + movementVector1.x < 9.5 && character1.position.x + movementVector1.x > -9.5) {
    character1.position.x += movementVector1.x;
  }
};

export { updateCharacter1 };
