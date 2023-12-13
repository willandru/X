// createCube.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';
import { scene, camera, renderer } from './sceneSetup.js';

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

export { cube };
