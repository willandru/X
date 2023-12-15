// chicken.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';

export function createChicken() {
    const chickenGeometry = new THREE.BoxGeometry();
    const chickenMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 }); // Yellow color for chickens
    const chicken = new THREE.Mesh(chickenGeometry, chickenMaterial);

    // Set initial position for the chicken
    chicken.position.set(Math.random() * 20 - 10, 0, Math.random() * 20 - 10);

    // Speed and jump parameters for the chicken
    const speed_move = 0.01;
    const jumpHeight = 1;
    const jumpDuration = 1;
    let jumpStartTime = 0;

    // Initial position above the floor
    const initialY = jumpHeight;

    // Update function for the chicken
    chicken.update = () => {
        // Move chicken in random patterns
        chicken.position.x += (Math.random() - 0.5) * speed_move;
        chicken.position.z += (Math.random() - 0.5) * speed_move;

        // Handle jumping
        const elapsedJumpTime = (performance.now() - jumpStartTime) / 1000;

        if (elapsedJumpTime > jumpDuration) {
            // Start a new jump
            jumpStartTime = performance.now();
        }

        // Apply smooth jump motion using a sinusoidal function
        const jumpProgress = Math.sin((elapsedJumpTime / jumpDuration) * Math.PI);
        chicken.position.y = initialY + jumpHeight * jumpProgress;
    };

    return chicken;
}
