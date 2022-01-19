import { useLoader, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { TextureLoader } from 'three'

import SmileyTexture from '../assets/textures/smiley.png'

const Smiley = (props) => {

    const [smileyMap] = useLoader(TextureLoader, [SmileyTexture])
    const smileySphere = useRef()

    useFrame(({ clock }) => {
        smileySphere.current.rotation.x = -Math.PI / 4 + (props.posY / window.innerHeight) * Math.PI / 2
        smileySphere.current.rotation.y = -Math.PI * 3 / 4 + (props.posX / window.innerWidth) * Math.PI / 2
        smileySphere.current.rotation.z = 0

    })

    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight color="#fff" position={[3, 0, 3]} />
            <mesh ref={smileySphere} position={[0, 0, 1]} >
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial map={smileyMap} />
            </mesh>
        </>)

}

export default Smiley