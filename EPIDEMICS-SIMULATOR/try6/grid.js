// grid.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';

export function createGrid(scene, floorSize) {
    const grid = new THREE.GridHelper(floorSize, 10, 0x000000, 0x000000);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    scene.add(grid);
}
