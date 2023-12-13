// createFloor.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';
import { scene } from './sceneSetup.js';

const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

const grid = new THREE.GridHelper(20, 20);
scene.add(grid);

export { floor };
