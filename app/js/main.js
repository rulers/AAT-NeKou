var NeKou = {
  VERSION: 0.1
};
;( function () {

  NeKou.webglExperimental = ( function () {
    var experimental;
    var canvas = document.createElement( 'canvas' );
    var gl = canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' );
    if ( !gl ) {
      experimental = false;
    } else {
      experimental = true;
    }
    return experimental;
  } )();

  NeKou.updateHandler = {
    handler: []
  };

  NeKou.updateHandler.add = function ( handler ) {
    if ( typeof handler ) {
      NeKou.updateHandler.handler.push( handler );
    }
  }

  NeKou.updateHandler.excuse = function () {
    var i, l = NeKou.updateHandler.handler.length;
    for ( i = 0; i < l; i ++ ) {
      NeKou.updateHandler.handler[ i ]();
    }
  }
  
  NeKou.play = function () {
    NeKou.isPaused = false;
    NeKou.updadeLoop();
  }

  NeKou.updadeLoop = function () {
    if ( NeKou.isPaused ) {
      return;
    }
    requestAnimationFrame( NeKou.updadeLoop );
    NeKou.world.step( 1.0 / 60.0 );

    var delta = NeKou.clock.getDelta();
    var theta = NeKou.clock.getElapsedTime();

    NeKou.camera.position.x = 20 * Math.sin( theta * 10 * Math.PI / 360 );
    NeKou.camera.position.z = 20 * Math.cos( theta * 10 * Math.PI / 360 );
    NeKou.camera.lookAt( NeKou.cameraTarget );

    THREE.AnimationHandler.update( delta );

    NeKou.updateHandler.excuse();

    NeKou.renderer.render( NeKou.scene, NeKou.camera );
    // NeKou.renderer.clear();
    // NeKou.composer.render();
  }

  NeKou.onresize = function () {
    NeKou.width = window.innerWidth,
    NeKou.height = window.innerHeight;
    NeKou.renderer.setSize( NeKou.width, NeKou.height );
    NeKou.camera.aspect = NeKou.width / NeKou.height;
    NeKou.camera.updateProjectionMatrix();
  }

} )();
;( function () {
  NeKou.init = function () {
    NeKou.width = window.innerWidth,
    NeKou.height = window.innerHeight;
    NeKou.container = document.body;
    NeKou.clock = new THREE.Clock();
    NeKou.cameraTarget = new THREE.Vector3( 0, 0, 0 );

    NeKou.scene = new THREE.Scene();
    NeKou.scene.fog = new THREE.FogExp2( 0xffffff, 0.012 );

    NeKou.camera = new THREE.PerspectiveCamera( 60, NeKou.width / NeKou.height, 1, 300 );
    NeKou.camera.position.set( 0, 5, -40 );
    NeKou.camera.lookAt( NeKou.cameraTarget );

    var ambientLight = new THREE.AmbientLight( 0xffffff );
    NeKou.scene.add( ambientLight );

    var spotLight = new THREE.SpotLight( 0xffffff, 0.2 );
    spotLight.position.set( -10, 100, 10 );
    spotLight.target.position.set( 0, 0, 0 );
    spotLight.castShadow = true;
    spotLight.shadowMapWidth = 512;
    spotLight.shadowMapHeight = 512;
    spotLight.shadowCameraFov = 60;
    spotLight.shadowCameraNear = 1;
    spotLight.shadowCameraFar = 300;
    spotLight.shadowBias = -0.0003;
    spotLight.shadowDarkness = 0.5;
    // spotLight.shadowCameraVisible = true;
    NeKou.scene.add( spotLight );

    NeKou.renderer = new THREE.WebGLRenderer();
    NeKou.renderer.setSize( NeKou.width, NeKou.height );
    NeKou.renderer.setClearColor( 0xeeeeee );

    NeKou.renderer.shadowMapEnabled = true;
    NeKou.container.appendChild( NeKou.renderer.domElement );

    // I just wonted to attach some effect thought PostProcess
    // but i couldnt find nice one...

    // var renderModel = new THREE.RenderPass( NeKou.scene, NeKou.camera );
    // var effectBloom = new THREE.BloomPass( 1, 25, 1.3 );
    // var effectCopy = new THREE.ShaderPass( THREE.CopyShader );
    // effectCopy.renderToScreen = true;

    // NeKou.composer = new THREE.EffectComposer( NeKou.renderer );
    // NeKou.composer.addPass( renderModel );
    // NeKou.composer.addPass( effectBloom );
    // NeKou.composer.addPass( effectCopy );

    // cannon---
    NeKou.world = new CANNON.World();
    NeKou.world.gravity.set( 0, -9.82, 0 );
    NeKou.world.broadphase = new CANNON.NaiveBroadphase();

    // NeKou.contactMaterial = {
    //   ground: new CANNON.Material(),
    //   player: new CANNON.Material(),
    //   object: new CANNON.Material()
    // }

    // var contact1 = new CANNON.ContactMaterial(
    //     NeKou.contactMaterial.ground,
    //     NeKou.contactMaterial.player,
    //     1.0,
    //     0.0
    // );
    // NeKou.world.addContactMaterial( contact1 );
    
    $( window ).on( 'resize', NeKou.onresize );
  }
} )();
;( function () {
  const TEXTURE_DEFUSE_URL = '/assets/model/ground/defuse.jpg';
  // const TEXTURE_BUMP_URL   = '/assets/model/ground/bump.jpg';

  NeKou.Ground = function () {
    this.mesh;
    this.body = new CANNON.RigidBody( 0, new CANNON.Plane() );
    this.body.quaternion.setFromAxisAngle( new CANNON.Vec3( 1, 0, 0 ), Math.PI / -2 );
    NeKou.world.add( this.body );

    THREE.EventDispatcher.prototype.apply( this );
  }

  NeKou.Ground.prototype.load = function () {
    var that = this;
    var d = new $.Deferred();
    var i;
    var simplexNoise = new SimplexNoise;
    var vertex;
    var geometry = new THREE.PlaneGeometry( 150, 150, 64, 64 );
    var defuse, bump;
    var state = 0;
    var checkState = function () {
      state ++;
      if ( state >= 2 ) {
        that.dispatchEvent( { type: 'loaded' } );
        d.resolve();
      }
    }

    for ( i = 0; i < geometry.vertices.length; i++ ) {
      vertex = geometry.vertices[i];
      vertex.z = simplexNoise.noise( vertex.x / 10, vertex.y / 10 ) / 3;
    }

    geometry.computeFaceNormals();
    geometry.computeVertexNormals();

    defuse = THREE.ImageUtils.loadTexture(
      TEXTURE_DEFUSE_URL,
      undefined,
      checkState,
      checkState
    );
    
    defuse.wrapS = defuse.wrapT = THREE.RepeatWrapping;
    // defuse.repeat.set( 16, 16 );

    // bump map cause an issue on IE11
    // bump = THREE.ImageUtils.loadTexture(
    //   TEXTURE_BUMP_URL,
    //   undefined,
    //   checkState,
    //   checkState
    // );
    // bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
    // bump.repeat.set( 16, 16 );

    this.mesh = new THREE.Mesh(
      geometry
    );

    this.mesh.rotation.x = Math.PI / -2;
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;

    NeKou.scene.add( this.mesh );
    checkState();
    return d.promise();
  }
} )();

;( function () {
  const MODEL_URL = '/assets/model/cat/nekou.js';
  const MASS = 80;
  const RADIUS = 2;

  NeKou.Santa = function () {
    this.mesh = new THREE.Object3D();
    this.body;
    THREE.EventDispatcher.prototype.apply( this );

    NeKou.scene.add( this.mesh );

    this.body = new CANNON.RigidBody( MASS, new CANNON.Sphere( RADIUS ) );
    this.body.position.set( 0, 10, 0 );
    NeKou.world.add( this.body );

      // var sphereGeometry = new THREE.SphereGeometry( RADIUS, 8, 8);
      // var sphereMaterial = new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } );
      // var sphereMesh = new THREE.Mesh( sphereGeometry, sphereMaterial );
      // NeKou.scene.add( sphereMesh );
    NeKou.updateHandler.add( this.update.bind( this ) );
  }

  NeKou.Santa.prototype.load = function () {
    var that = this;
    var d = new $.Deferred();
    var loader = new THREE.JSONLoader();
    loader.load( MODEL_URL, function( geo, mat ) {
      var mesh = new THREE.SkinnedMesh(
        geo,
        new THREE.MeshFaceMaterial( mat )
      );
      mesh.rotation.y = Math.PI;

      mesh.material.materials.forEach( function ( mat ) {
        mat.skinning = true;
      } );
      
      mesh.traverse( function ( child ) {
        child.castShadow = true;
        child.receiveShadow = false;
      } );

      // console.log(mesh.geometry.animations[ 0 ])
      THREE.AnimationHandler.add( mesh.geometry.animations[ 1 ] );
      THREE.AnimationHandler.add( mesh.geometry.animations[ 2 ] );
      THREE.AnimationHandler.add( mesh.geometry.animations[ 3 ] );
      THREE.AnimationHandler.add( mesh.geometry.animations[ 4 ] );
      THREE.AnimationHandler.add( mesh.geometry.animations[ 5 ] );
      THREE.AnimationHandler.add( mesh.geometry.animations[ 6 ] );
      
      that.motion = {
        idle : new THREE.Animation(
          mesh,
          mesh.geometry.animations[ 1 ].name,
          THREE.AnimationHandler.CATMULLROM
        ),
        run : new THREE.Animation(
          mesh,
          mesh.geometry.animations[ 2 ].name,
          THREE.AnimationHandler.CATMULLROM
        ),
        kabe : new THREE.Animation(
          mesh,
          mesh.geometry.animations[ 3 ].name,
          THREE.AnimationHandler.CATMULLROM
        ),
        nobi : new THREE.Animation(
          mesh,
          mesh.geometry.animations[ 4 ].name,
          THREE.AnimationHandler.CATMULLROM
        ),
        maeashi : new THREE.Animation(
          mesh,
          mesh.geometry.animations[ 5 ].name,
          THREE.AnimationHandler.CATMULLROM
        ),
        unko : new THREE.Animation(
          mesh,
          mesh.geometry.animations[ 6 ].name,
          THREE.AnimationHandler.CATMULLROM
        )
      }
      
      mesh.position.set( 0, -RADIUS, 0 );
      that.mesh.add( mesh );

      that.dispatchEvent( { type: 'loaded' } );
      d.resolve();
    } );
    return d.promise();
  }

  NeKou.Santa.prototype.update = function () {
    // this.body.quaternion.copy( this.mesh.quaternion );
    this.body.position.copy( this.mesh.position );
  }

  NeKou.Santa.prototype.maeashi = function () {
    this.motion.idle.stop();
    this.motion.run.stop();
    this.motion.nobi.stop();
    
    this.motion.kabe.stop();
    this.motion.maeashi.play();
    
  }

  NeKou.Santa.prototype.kabe = function () {
    this.motion.maeashi.stop();
    this.motion.idle.stop();
    this.motion.run.stop();
    this.motion.nobi.stop();
    this.motion.kabe.play();
    
  }

  NeKou.Santa.prototype.nobi = function () {
    this.motion.maeashi.stop();
    this.motion.kabe.stop();
    this.motion.idle.stop();
    this.motion.run.stop();
    this.motion.nobi.play();
    
  }

  NeKou.Santa.prototype.idle = function () {
    this.motion.maeashi.stop();
    this.motion.kabe.stop();
    this.motion.nobi.stop();
    this.motion.run.stop();
    this.motion.idle.play();
    
  }

  NeKou.Santa.prototype.run = function () {
    this.motion.maeashi.stop();
    this.motion.kabe.stop();
    this.motion.nobi.stop();
    this.motion.idle.stop();
    this.motion.run.play();
    
  }

} )();
;( function () {
  const PLAYER_MOVEMENT_SPEED = 8;

  NeKou.KeyInput = function ( playerObject ) {
    this.player = playerObject;

    this.disableMovementKey = false;
    // this.disableJumpKey = true;
    // this.disableMouse = true;
    // this.disableMouseScroll = true;

    this.keyInput = {
      up : false,
      down : false,
      left : false,
      right : false,
      e_key : false,
      q_key : false
    };

    window.addEventListener( 'keydown', NeKou.KeyInput.onkeydown.bind( this ), false );
    window.addEventListener( 'keyup',   NeKou.KeyInput.onkeyup.bind( this ),   false );
    NeKou.updateHandler.add( this.update.bind( this ) );
  }

  NeKou.KeyInput.prototype.update = function () {
    var up    = this.keyInput.up;
    var left  = this.keyInput.left;
    var right = this.keyInput.right;
    var down  = this.keyInput.down;
    var r_key = this.keyInput.r_key;
    var e_key = this.keyInput.e_key;
    var q_key = this.keyInput.q_key;

    var frontAngle = 0;
    if ( !up && !left &&  down && !right) { frontAngle +=   0 * Math.PI / 180 }
    if ( !up && !left &&  down &&  right) { frontAngle +=  45 * Math.PI / 180 }
    if ( !up && !left && !down &&  right) { frontAngle +=  90 * Math.PI / 180 }
    if (  up && !left && !down &&  right) { frontAngle += 135 * Math.PI / 180 }
    if (  up && !left && !down && !right) { frontAngle += 180 * Math.PI / 180 }
    if (  up &&  left && !down && !right) { frontAngle += 225 * Math.PI / 180 }
    if ( !up &&  left && !down && !right) { frontAngle += 270 * Math.PI / 180 }
    if ( !up &&  left &&  down && !right) { frontAngle += 315 * Math.PI / 180 }

    if ( up || left || down || right ) {
      this.player.mesh.rotation.y = frontAngle;
      this.player.body.velocity.x = -Math.sin( frontAngle ) * PLAYER_MOVEMENT_SPEED;
      this.player.body.velocity.z = -Math.cos( frontAngle ) * PLAYER_MOVEMENT_SPEED;
      this.player.run();
    } else if(e_key) {
      // this.player.body.velocity.x = 0;
      // this.player.body.velocity.z = 0;
      
      this.player.nobi();
    } else if(q_key) {
      // this.player.body.velocity.x = 0;
      // this.player.body.velocity.z = 0;
      // this.player.mesh.rotation.y = frontAngle;
      // this.player.body.velocity.x = -Math.sin( frontAngle ) * PLAYER_MOVEMENT_SPEED;
      // this.player.body.velocity.z = -Math.cos( frontAngle ) * PLAYER_MOVEMENT_SPEED;
      this.player.kabe();
    } else if(r_key) {
      // this.player.body.velocity.x = 0;
      // this.player.body.velocity.z = 0;
      // this.player.mesh.rotation.y = frontAngle;
      // this.player.body.velocity.x = -Math.sin( frontAngle ) * PLAYER_MOVEMENT_SPEED;
      // this.player.body.velocity.z = -Math.cos( frontAngle ) * PLAYER_MOVEMENT_SPEED;
      this.player.maeashi();
    } else {
      this.player.body.velocity.x = 0;
      this.player.body.velocity.z = 0;
      this.player.idle();
      // this.player.nobi();
    }
  };

  NeKou.KeyInput.onkeydown = function ( e ) {
    
console.log(e.keyCode);

    if ( !this.disableMovementKey ) {
      //W || up arrow
      if ( e.keyCode === 87 || e.keyCode === 38 ) {
        this.keyInput.e_key = false;
        this.keyInput.q_key = false;
        this.keyInput.r_key = false;

        this.keyInput.up = true;
        this.keyInput.down = false;
        this.keyInput.e_key = false;
      };
      //S || down arrow
      if ( e.keyCode === 83 || e.keyCode === 40 ) {
        this.keyInput.e_key = false;
        this.keyInput.q_key = false;
        this.keyInput.r_key = false;

        this.keyInput.down = true;
        this.keyInput.up = false;
        this.keyInput.e_key = false;
      };
      //A || left arrow
      if ( e.keyCode === 65 || e.keyCode === 37 ) {
        this.keyInput.e_key = false;
        this.keyInput.q_key = false;
        this.keyInput.r_key = false;

        this.keyInput.left = true;
        this.keyInput.right = false;
        this.keyInput.e_key = false;
      };
      //D || right arrow
      if ( e.keyCode === 68 || e.keyCode === 39 ) {
        this.keyInput.e_key = false;
        this.keyInput.q_key = false;
        this.keyInput.r_key = false;


        this.keyInput.right = true;
        this.keyInput.left = false;
        this.keyInput.e_key = false;
      };
      //E
      if ( e.keyCode === 69) {
      
        this.keyInput.e_key = true;

        this.keyInput.q_key = false;
        this.keyInput.r_key = false;
        // 方向はすべてfalse
        this.keyInput.down = false
        this.keyInput.up = false;
        this.keyInput.right = false;
        this.keyInput.left = false;
      };
      //Q
      if (e.keyCode === 81) {
        this.keyInput.q_key = true;
        
        // console.log(this.keyInput)
        this.keyInput.e_key = false
        this.keyInput.r_key = false;
        // 方向はすべてfalse
        this.keyInput.down = false
        this.keyInput.up = false;
        this.keyInput.right = false;
        this.keyInput.left = false;
      };
      //R
      if (e.keyCode === 82) {
        this.keyInput.r_key = true;
        
        // console.log(this.keyInput)
        this.keyInput.e_key = false
        this.keyInput.q_key = false;
        // 方向はすべてfalse
        this.keyInput.down = false
        this.keyInput.up = false;
        this.keyInput.right = false;
        this.keyInput.left = false;
      };
    };
    // if( !this.disableJumpKey ) {
    //   if ( /32/.test( e.keyCode ) ) {
    //     TODO JUMP
    //   };
    // };
  }

  NeKou.KeyInput.onkeyup = function ( e ) {
    if( e.keyCode === 87 || e.keyCode === 38 ){
      this.keyInput.up = false;
    } else if ( e.keyCode === 83 || e.keyCode === 40 ){
      this.keyInput.down = false;
    } else if ( e.keyCode === 65 || e.keyCode === 37 ){
      this.keyInput.left = false;
    } else if ( e.keyCode === 68 || e.keyCode === 39 ){
      this.keyInput.right = false;
    } else if ( e.keyCode === 69 || e.keyCode === 81 || e.keyCode === 82){
      this.keyInput.up = false;
      this.keyInput.down = false;
      this.keyInput.left = false;
      this.keyInput.right = false;
    }
  }

} )();