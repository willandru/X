// scene-setup.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';

const scene = new THREE.Scene();

const camera = new THREE.OrthographicCamera(
  window.innerWidth / -100,
  window.innerWidth / 100,
  window.innerHeight / 100,
  window.innerHeight / -100,
  0.1, 1000
);

camera.position.set(10, 8, 10);
camera.lookAt(new THREE.Vector3(0, 0, 0));

window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  camera.left = -newWidth / 100;
  camera.right = newWidth / 100;
  camera.top = newHeight / 100;
  camera.bottom = -newHeight / 100;

  camera.updateProjectionMatrix();
  renderer.setSize(newWidth, newHeight);
});

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const grid = new THREE.GridHelper(20, 20);
scene.add(grid);

const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

export { scene, camera, renderer };
