import react, { Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import Earth from "../components/Earth";
import './EarthPage.css'
import BackArrow from "../components/BackArrow";

const EarthPage = () => {
    return (
        <div className="earth-container">
            <BackArrow />
            <Canvas>
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
        </div>
    )
}


export default EarthPage