// animate.js
import { cube } from './createCube.js';
import { scene, camera, renderer } from './sceneSetup.js';

function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}

export default animate;
