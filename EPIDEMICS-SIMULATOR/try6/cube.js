// cube.js

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';

export function createCube() {
    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterials = [
        new THREE.MeshBasicMaterial({ color: 0x000000 }), // Right face (black)
        new THREE.MeshBasicMaterial({ color: 0x000000 }), // Left face (black)
        new THREE.MeshBasicMaterial({ color: 0x000000 }), // Top face (black)
        new THREE.MeshBasicMaterial({ color: 0x000000 }), // Bottom face (black)
        new THREE.MeshBasicMaterial({ color: 0x000000 }), // Front face (black)
        new THREE.MeshBasicMaterial({ color: 0xffffff }), // Back face (white)
    ];
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
    
    // Adjust the initial position to be on the floor
    cube.position.y = cubeGeometry.parameters.height / 2;

    return cube;
}
