// createCube.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';
import { scene } from './sceneSetup.js';

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xaf00f0 });
const character1 = new THREE.Mesh(geometry, material);
character1.position.set(0, 0.5, 0);
scene.add(character1);

export { character1 };
