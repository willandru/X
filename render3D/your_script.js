// Set up scene, camera, and renderer
const scene = new THREE.Scene();

// Use an orthographic camera for an isometric view
const camera = new THREE.OrthographicCamera(
  window.innerWidth / -100,  // left
  window.innerWidth / 100,   // right
  window.innerHeight / 100,  // top
  window.innerHeight / -100, // bottom
  0.1, 1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a grid
const grid = new THREE.GridHelper(20, 20);
scene.add(grid);

// Create a floor
const floorGeometry = new THREE.PlaneGeometry(20, 20, 10, 10);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Create the first character (cube) with arrow key controls
const character1Geometry = new THREE.BoxGeometry(1, 1, 1);
const character1Material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const character1 = new THREE.Mesh(character1Geometry, character1Material);
character1.position.set(0, 0.5, 0); // Start at the center of the floor
scene.add(character1);

// Create the second character (cube) with WASD controls
const character2Geometry = new THREE.BoxGeometry(1, 1, 1);
const character2Material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const character2 = new THREE.Mesh(character2Geometry, character2Material);
character2.position.set(3, 0.5, 0); // Start at a different position
scene.add(character2);











// Handle keyboard input for character1 movement (Arrow keys)
document.addEventListener('keydown', (event) => {
  const speed = 0.2; // Adjust the speed as needed

  const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
  const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);

  switch (event.code) {
    case 'ArrowUp':
      character1.position.z += speed * forward.z;
      character1.position.x += speed * forward.x;
      break;
    case 'ArrowDown':
      character1.position.z -= speed * forward.z;
      character1.position.x -= speed * forward.x;
      break;
    case 'ArrowLeft':
      character1.position.x -= speed * right.x;
      character1.position.z -= speed * right.z;
      break;
    case 'ArrowRight':
      character1.position.x += speed * right.x;
      character1.position.z += speed * right.z;
      break;
  }
});

// Handle keyboard input for character2 movement (WASD keys)
document.addEventListener('keydown', (event) => {
  const speed = 0.2; // Adjust the speed as needed

  const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
  const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);

  switch (event.key) {
    case 'w':
      character2.position.z += speed * forward.z;
      character2.position.x += speed * forward.x;
      break;
    case 's':
      character2.position.z -= speed * forward.z;
      character2.position.x -= speed * forward.x;
      break;
    case 'a':
      character2.position.x -= speed * right.x;
      character2.position.z -= speed * right.z;
      break;
    case 'd':
      character2.position.x += speed * right.x;
      character2.position.z += speed * right.z;
      break;
  }
});











// Set up animation loop
const animate = function () {
  requestAnimationFrame(animate);

  // Check for collision between character1 and character2
  const distance = character1.position.distanceTo(character2.position);
  const collisionThreshold = 1.0; // Adjust the threshold as needed

  if (distance < collisionThreshold) {
    // Collision detected: Remove character2 from the scene
    scene.remove(character2);
  }

  renderer.render(scene, camera);
};

// Position the camera
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

// Start the animation loop
animate();
