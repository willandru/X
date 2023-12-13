// controls.js
import { cube } from './createCube.js';

const moveDistance = 0.1;

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            cube.position.z -= moveDistance;
            break;
        case 'ArrowDown':
            cube.position.z += moveDistance;
            break;
        case 'ArrowLeft':
            cube.position.x -= moveDistance;
            break;
        case 'ArrowRight':
            cube.position.x += moveDistance;
            break;
    }
});
