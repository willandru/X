export function handleKeyboardInput(event, character1, character2) {
  const speed = 0.2;

  switch (event.code) {
    case 'ArrowUp':
      if (character1.position.z - speed > -9.5) character1.position.z -= speed;
      break;
    case 'ArrowDown':
      if (character1.position.z + speed < 9.5) character1.position.z += speed;
      break;
    case 'ArrowLeft':
      if (character1.position.x - speed > -9.5) character1.position.x -= speed;
      break;
    case 'ArrowRight':
      if (character1.position.x + speed < 9.5) character1.position.x += speed;
      break;
  }

  switch (event.key) {
    case 'w':
      if (character2.position.z - speed > -9.5) character2.position.z -= speed;
      break;
    case 's':
      if (character2.position.z + speed < 9.5) character2.position.z += speed;
      break;
    case 'a':
      if (character2.position.x - speed > -9.5) character2.position.x -= speed;
      break;
    case 'd':
      if (character2.position.x + speed < 9.5) character2.position.x += speed;
      break;
  }
}
