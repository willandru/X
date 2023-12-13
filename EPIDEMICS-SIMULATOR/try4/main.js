// main.js
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';
import { scene, renderer } from './scene-setup.js';
import { character1, movementVector1, updateCharacter1 } from './character-setup.js';
import { blueBoxes } from './blue-box-setup.js';
import { animate } from './animation-loop.js';

// Start the animation loop
animate();
