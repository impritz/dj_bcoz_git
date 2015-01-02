
			var container;
			var camera, scene, renderer;
			var group;
			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

			init();
			animate();

			function init() {

				container = document.getElementById( 'container' );

				camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 500;

				scene = new THREE.Scene();

				group = new THREE.Object3D();
				scene.add( group );

				// earth

				var earthTexture = new THREE.Texture();
				var loader = new THREE.ImageLoader();

				loader.addEventListener( 'load', function ( event ) {

					earthTexture.image = event.content;
					earthTexture.needsUpdate = true;

				} );

				loader.load( 'images/map.jpg' );

				var geometry = new THREE.SphereGeometry( 150, 20, 20 );
				var material = new THREE.MeshBasicMaterial( { map: earthTexture, overdraw: true } );

				var mesh = new THREE.Mesh( geometry, material );
				group.add( mesh );

				renderer = new THREE.CanvasRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );

				container.appendChild( renderer.domElement );

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}


			//

			function animate() {

				requestAnimationFrame( animate );

				render();
				

			}

			function render() {

				camera.position.x += ( mouseX - camera.position.x ) * 0.05;
				camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
				camera.lookAt( scene.position );

				group.rotation.y += 0.01;

				renderer.render( scene, camera );

			}