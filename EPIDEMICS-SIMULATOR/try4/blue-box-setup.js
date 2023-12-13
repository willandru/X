// blue-box-setup.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';
import { scene, floorSize } from './scene-setup.js';

const blueBoxes = [];

document.getElementById('addBoxButton').addEventListener('click', () => {
  const blueBoxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const blueBoxMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const newBlueBox = new THREE.Mesh(blueBoxGeometry, blueBoxMaterial);

  const halfFloorSize = floorSize / 2;

  newBlueBox.position.set(
    (Math.random() * (floorSize - 2)) - halfFloorSize + 1,
    0.5,
    (Math.random() * (floorSize - 2)) - halfFloorSize + 1
  );

  scene.add(newBlueBox);
  blueBoxes.push(newBlueBox);
});

export { blueBoxes };
