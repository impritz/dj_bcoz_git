function init() {
    var e = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false;
    if (e) return;
    container = document.getElementById("container");
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1e4);
    camera.position.z = 500;
    scene = new THREE.Scene;
    group = new THREE.Object3D;
    scene.add(group);
    var t = new THREE.Texture;
    var n = new THREE.ImageLoader;
    n.addEventListener("load", function (e) {
        t.image = e.content;
        t.needsUpdate = true
    });
    n.load("images/map.jpg");
    var r = new THREE.SphereGeometry(window.innerWidth*0.1, 20, 20);
    var i = new THREE.MeshBasicMaterial({
        map: t,
        overdraw: true
    });
    var s = new THREE.Mesh(r, i);
    group.add(s);
    renderer = new THREE.CanvasRenderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    window.addEventListener("resize", onWindowResize, false)
}

function onWindowResize() {
    // windowHalfX = window.innerWidth / 2;
    // windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
    var e = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false;
    if (e) return;
    requestAnimationFrame(animate);
    render()
}

function render() {
    camera.position.x += (mouseX - camera.position.x) * .05;
    camera.position.y += (-mouseY - camera.position.y) * .05;
    camera.lookAt(scene.position);
    group.rotation.y += .01;
    renderer.render(scene, camera)
}
var container;
var camera, scene, renderer;
var group;
var mouseX = 0,
    mouseY = 0;
// var windowHalfX = window.innerWidth / 2;
// var windowHalfY = window.innerHeight / 2;
init();
animate()