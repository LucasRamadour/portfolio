import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";

import EarthDayMap from '../assets/textures/8k_earth_daymap.jpg'
import EarthCloudsMap from '../assets/textures/8k_earth_clouds.jpg'
import EarthNightMap from '../assets/textures/8k_earth_nightmap.jpg'
import MoonMap from '../assets/textures/8k_moon.jpg'
import EarthNormalMap from '../assets/textures/8k_earth_normal_map.jpg'
import EarthSpecularMap from '../assets/textures/8k_earth_specular_map.jpg'
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three"



const Earth = (props) => {

    const [colorMap, normalMap, specularMap, cloudMap, moonMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap, MoonMap])

    const earthRef = useRef();
    const cloudRef = useRef();
    const moonRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime()
        earthRef.current.rotation.y = elapsedTime / 10;
        cloudRef.current.rotation.y = elapsedTime / 10.5;

        moonRef.current.position.x = 1.5 * Math.cos(0.3 * elapsedTime)
        moonRef.current.position.z = 1.5 * Math.sin(0.3 * elapsedTime)
        moonRef.current.position.y = 1.5 * Math.cos(0.3 * elapsedTime) * 0.5
    })

    return <>
        {/*<ambientLight intensity={0.5} />*/}
        <pointLight color="#f6f3ea" position={[3, 0, 3]} intensity={1.2} />
        <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />
        <mesh ref={cloudRef}>
            <sphereGeometry args={[1.005, 32, 32]} />
            <meshPhongMaterial map={cloudMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} />
        </mesh>
        <mesh ref={earthRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhongMaterial specularMap={specularMap} />
            <meshStandardMaterial map={colorMap} normalMap={normalMap} roughness={0.7} metalness={0.4} />
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} />
        </mesh>
        <mesh ref={moonRef} position={[1.5, 0, 0]}>
            <sphereGeometry args={[0.25, 32, 32]} />

            <meshPhongMaterial color='white' />
            <meshStandardMaterial map={moonMap} roughness={0.7} metalness={0.4} />
        </mesh>
    </>

}

export default Earth