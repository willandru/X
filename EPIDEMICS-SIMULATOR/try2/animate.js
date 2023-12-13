// animate.js
import { character1, updateCharacter1 } from './createCube.js';
import { scene, camera, renderer } from './sceneSetup.js';

function animate() {
  updateCharacter1();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

export default animate;
