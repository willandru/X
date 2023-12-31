// scene-setup.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';


const scene = new THREE.Scene();
const floorSize = 80; // Declare the floor size here



const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const grid = new THREE.GridHelper(floorSize, floorSize);
scene.add(grid);

const floorGeometry = new THREE.PlaneGeometry(floorSize, floorSize);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

export { scene, renderer, floorSize };
