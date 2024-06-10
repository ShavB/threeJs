import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

// canvas
const canvas  = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// objects

const group = new THREE.Group();

const box1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({color: "orange"})
)
box1.position.set(0, 0, 0);
group.add(box1);
scene.add(group);

// size
const size = {
  width: window.innerWidth,
  height: window.innerHeight
}

// camera
const camera = new THREE.PerspectiveCamera(75, size.width/size.height);
camera.position.set(0, 0, 3)
// scene.add(camera);

// change camera view
const control = new OrbitControls(camera, canvas);
control.enableDamping = true;

// renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Resize
window.addEventListener('resize', (e)=> {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width/size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
})

// Fullscreen

window.addEventListener('keydown', (event) => {
  const keyPressed= event.key === 'f' || event.key === 'F';
  if(keyPressed){
    if(!document.fullscreenElement && keyPressed){
      canvas.requestFullscreen();
    }else{
      document.exitFullscreen();
    }  
  }
})

const Animate = () => {
  control.update();
  renderer.render(scene, camera)
  window.requestAnimationFrame(Animate);
}
Animate();


