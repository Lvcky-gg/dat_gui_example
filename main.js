import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import * as dat from 'dat.gui';
const gui = new dat.GUI();
const world = {
  plane:{
    width:10,
    height:10
  },
}
gui.add(world.plane, 'width', 1,20).onChange(()=>{
  planeMesh.geometry.dispose();
  planeMesh.geometry = new THREE.PlaneGeometry(world.plane.width,world.plane.height,10,10);
  const {array }= planeMesh.geometry.attributes.position

  for(let i = 0; i < array.length; i+=3){
    const x = array[i];
    const y = array[i + 1];
    const z = array[i + 2];

    array[i + 2] = z + Math.random()
  }
})
gui.add(world.plane, 'height',1,20).onChange(()=>{
  planeMesh.geometry.dispose();
  planeMesh.geometry = new THREE.PlaneGeometry(world.plane.width,world.plane.height,10,10);
  const {array }= planeMesh.geometry.attributes.position

  for(let i = 0; i < array.length; i+=3){
    const x = array[i];
    const y = array[i + 1];
    const z = array[i + 2];

    array[i + 2] = z + Math.random()
  }

})


  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 
    innerWidth / innerHeight, 
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  const light = new THREE.DirectionalLight(0xffffff,1);
  light.position.set(0,0,1);

  const planeGeometry = new THREE.PlaneGeometry(5,5,10,10);
  const planeMaterial = new THREE.MeshPhongMaterial({color:0xFF0000, side: THREE.DoubleSide, flatShading: THREE.FlatShading} );
  const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
  const {array }= planeMesh.geometry.attributes.position

  for(let i = 0; i < array.length; i+=3){
    const x = array[i];
    const y = array[i + 1];
    const z = array[i + 2];

    array[i + 2] = z + Math.random()
  }

  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(devicePixelRatio);
  scene.add(planeMesh);
  scene.add(light)
  camera.position.z = 5;



  const animate = () =>{
     requestAnimationFrame(animate);
     renderer.render(scene, camera);
    //  planeMesh.rotation.x+=.01;
    };
  
  document.body.appendChild( renderer.domElement );

  animate();