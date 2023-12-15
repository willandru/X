// floor.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';

export function createFloor(scene, floorSize) {
    const floorGeometry = new THREE.PlaneGeometry(floorSize, floorSize);
    const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = Math.PI / 2;
    scene.add(floor);
}
