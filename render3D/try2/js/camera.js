// camera.js
import * as THREE from 'three';

export function initCamera(renderer) {
  // Use an orthographic camera for an isometric view
  const camera = new THREE.OrthographicCamera(
    window.innerWidth / -100,
    window.innerWidth / 100,
    window.innerHeight / 100,
    window.innerHeight / -100,
    0.1, 1000
  );

  // Set initial camera position
  camera.position.set(10, 8, 10);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  // Handle window resize
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
}
