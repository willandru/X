import { scene, camera, renderer, floorSize } from './scene-setup.js';
import { character, updateCharacter } from './character-setup.js';

const animate = function () {
  updateCharacter();

  // Update camera position to follow the character
  const distanceFromCharacter = 10;
  const heightAboveCharacter = 5;

  camera.position.copy(character.position).add(
    new THREE.Vector3(distanceFromCharacter, heightAboveCharacter, distanceFromCharacter)
  );
  camera.lookAt(character.position);

  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

export { animate };
