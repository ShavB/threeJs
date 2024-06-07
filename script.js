import * as THREE from 'three';

// Canvas
const canvas = document.querySelector("canvas.webgl")

// Scene
const scene = new THREE.Scene();

// Objects (geometry, material, mesh)
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material
// Cuube

const material = new THREE.MeshBasicMaterial(
    { color: "red" }
);
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 1, 0)
scene.add(mesh);

// Line
const lineMaterial = new THREE.LineBasicMaterial({color: 0x0000ff });
const points = [];
// points.push( new THREE.Vector3( - 10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );

const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line(lineGeometry, lineMaterial)
line.position.set(0, 0, -1);
scene.add(line)


// Size
const size = {
    width: 800,
    height: 600,
}
// camera
const camera = new THREE.PerspectiveCamera(90, size.width / size.height);
camera.position.set(0, 0, 3);
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(size.width, size.height);
// renderer.render(scene, camera)


function Animate(){
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.0002;
    renderer.render(scene, camera)
}

renderer.setAnimationLoop(Animate);