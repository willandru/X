import * as THREE from 'three';

export function createCharacters(scene) {
  const grid = new THREE.GridHelper(20, 20);
  scene.add(grid);

  const floorGeometry = new THREE.PlaneGeometry(20, 20, 10, 10);
  const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);

  const character1Geometry = new THREE.BoxGeometry(1, 1, 1);
  const character1Material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const character1 = new THREE.Mesh(character1Geometry, character1Material);
  character1.position.set(0, 0.5, 0);
  scene.add(character1);

  const character2Geometry = new THREE.BoxGeometry(1, 1, 1);
  const character2Material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const character2 = new THREE.Mesh(character2Geometry, character2Material);
  character2.position.set(3, 0.5, 0);
  scene.add(character2);

  return { character1, character2 };
}
