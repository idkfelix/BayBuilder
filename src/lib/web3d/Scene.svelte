<script>
  import { T } from '@threlte/core'
  import { Sky, Align, OrbitControls } from '@threlte/extras'
  import { DEG2RAD } from 'three/src/math/MathUtils'
  import Bay from '$lib/web3d/Bay.svelte';
</script>

<!-- Camera -->
<T.OrthographicCamera
  makeDefault
  position={[5, 4, 10]}
  zoom={70}
  far={30}
>
  <OrbitControls 
    enableDamping
    enablePan={false}
    minAzimuthAngle={DEG2RAD *-60}
    maxAzimuthAngle={DEG2RAD *60}
    minPolarAngle={DEG2RAD *45}
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
  castShadow
/>

<Sky 
  elevation={10} 
  azimuth={-45}
  rayleigh={0.1}
/>

<!-- Bay -->
<Align>
  <Bay/>
</Align>