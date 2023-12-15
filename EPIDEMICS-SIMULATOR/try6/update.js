//update.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';

export function update(scene, camera, renderer, cube, offset, keyboardState, floorSize) {
    const speed_move = 0.01;
    const speed_rot = 0.03;
    const jumpHeight = 3;
    const jumpDuration = 0.8; // in seconds

    let isJumping = false;
    let jumpStartTime = 0;

    const update = () => {
        requestAnimationFrame(update);

        // Move cube with arrow keys
        const newPosition = cube.position.clone();

        if (keyboardState.forward) {
            const forwardVector = new THREE.Vector3(0, 0, speed_move);
            forwardVector.applyQuaternion(cube.quaternion);
            newPosition.add(forwardVector);
        }
        if (keyboardState.backward) {
            const backwardVector = new THREE.Vector3(0, 0, -speed_move);
            backwardVector.applyQuaternion(cube.quaternion);
            newPosition.add(backwardVector);
        }
        if (keyboardState.leftRotate) {
            cube.rotation.y += speed_rot;
        }
        if (keyboardState.rightRotate) {
            cube.rotation.y -= speed_rot;
        }
        if (keyboardState.moveLeft) {
            const leftVector = new THREE.Vector3(speed_move, 0, 0);
            leftVector.applyQuaternion(cube.quaternion);
            newPosition.add(leftVector);
        }
        if (keyboardState.moveRight) {
            const rightVector = new THREE.Vector3(-speed_move, 0, 0);
            rightVector.applyQuaternion(cube.quaternion);
            newPosition.add(rightVector);
        }

        // Handle jumping
        if (keyboardState.space && !isJumping && newPosition.y <= cube.geometry.parameters.height / 2) {
            isJumping = true;
            jumpStartTime = performance.now();
        }

        if (isJumping) {
            const elapsedJumpTime = (performance.now() - jumpStartTime) / 1000; // Convert to seconds

            if (elapsedJumpTime < jumpDuration) {
                // Apply smooth jump motion using a sinusoidal function
                const jumpProgress = Math.sin((elapsedJumpTime / jumpDuration) * Math.PI);
                newPosition.y = cube.geometry.parameters.height / 2 + jumpHeight * jumpProgress;
            } else {
                // End of jump
                isJumping = false;
                newPosition.y = cube.geometry.parameters.height / 2;
            }
        }

        // Ensure the cube stays within the grid and floor boundaries
        const halfFloorSize = floorSize / 2;
        const halfCubeSizeX = cube.geometry.parameters.width / 2;
        const halfCubeSizeZ = cube.geometry.parameters.depth / 2;

        newPosition.x = Math.min(halfFloorSize - halfCubeSizeX, Math.max(-halfFloorSize + halfCubeSizeX, newPosition.x));
        newPosition.z = Math.min(halfFloorSize - halfCubeSizeZ, Math.max(-halfFloorSize + halfCubeSizeZ, newPosition.z));

        cube.position.copy(newPosition);

        // Update camera position to follow the cube's black face
        const rotatedOffset = offset.clone().applyQuaternion(cube.quaternion);
        camera.position.copy(cube.position).add(rotatedOffset);
        camera.lookAt(cube.position);

        // Render scene
        renderer.render(scene, camera);
    };

    // Run the update function
    update();
}
