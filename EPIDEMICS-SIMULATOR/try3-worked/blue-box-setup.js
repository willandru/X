// blue-box-setup.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';
import { scene } from './scene-setup.js';  // Add this line

const blueBoxes = [];

document.getElementById('addBoxButton').addEventListener('click', () => {
  const blueBoxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const blueBoxMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const newBlueBox = new THREE.Mesh(blueBoxGeometry, blueBoxMaterial);

  newBlueBox.position.set(
    (Math.random() * 18) - 9,
    0.5,
    (Math.random() * 18) - 9
  );

  scene.add(newBlueBox);
  blueBoxes.push(newBlueBox);
});

export { blueBoxes };
