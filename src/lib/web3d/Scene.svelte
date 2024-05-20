<script>
  import { T } from '@threlte/core'
  import { Sky, Align, OrbitControls, interactivity } from '@threlte/extras'
  import { DEG2RAD } from 'three/src/math/MathUtils'
  import Bay from '$lib/web3d/Bay.svelte';
  
  interactivity()
</script>

<!-- Camera -->
<T.OrthographicCamera
  makeDefault
  position={[5, 4, 10]}
  zoom={75}
  far={30}
>
  <OrbitControls 
    enableDamping
    enablePan={false}
    minAzimuthAngle={DEG2RAD *-80}
    maxAzimuthAngle={DEG2RAD *80}
    minPolarAngle={DEG2RAD *30}
    maxPolarAngle={DEG2RAD *90}
  />
</T.OrthographicCamera>

<!-- Lights -->
<T.DirectionalLight
  position={[-3, 3, 6]}
  intensity={2}
  castShadow
/>

<T.AmbientLight 
  color={'#ffe6cc'}
  intensity={2.5}
/>

<Sky 
  elevation={10} 
  azimuth={-10}
  rayleigh={0.1}
/>

<!-- Bay -->
<Align>
  <Bay/>
</Align>