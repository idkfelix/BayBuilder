<script>
  import { T } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
  import { DEG2RAD } from 'three/src/math/MathUtils.js'
</script>

<T.OrthographicCamera
  makeDefault
  position={[5, 3, 10]}
  zoom={75}
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

