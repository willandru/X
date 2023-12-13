// camera-setup.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';

const createCamera = () => {
  const camera = new THREE.OrthographicCamera(
    window.innerWidth / -100,
    window.innerWidth / 100,
    window.innerHeight / 100,
    window.innerHeight / -100,
    0.1, 1000
  );


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

  return camera;
};

export { createCamera };
