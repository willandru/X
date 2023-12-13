// app.js
import animate from './animate.js';

document.addEventListener('DOMContentLoaded', function () {
    // Start the animation loop
    animate();

    // Handle window resize
    window.addEventListener('resize', function () {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(newWidth, newHeight);
    });
});
