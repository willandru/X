// scene.js
import * as THREE from 'three';

export function initScene() {
  const scene = new THREE.Scene();

  const camera = new THREE.OrthographicCamera(
    window.innerWidth / -100,
    window.innerWidth / 100,
    window.innerHeight / 100,
    window.innerHeight / -100,
    0.1, 1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Other scene setup if needed...

  return { scene, camera, renderer };
}
