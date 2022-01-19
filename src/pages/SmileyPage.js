import react, { Suspense, useState } from "react";
import { Canvas } from '@react-three/fiber'
import Smiley from "../components/Smiley";
import './SmileyPage.css'
import BackArrow from "../components/BackArrow";

const SmileyPage = () => {

    const [posX, setPosX] = useState()
    const [posY, setPosY] = useState()

    function _onMouseMove(e) {
        setPosX(e.screenX)
        setPosY(e.screenY)
    }



    return (
        <div className="smiley-container" onMouseMove={_onMouseMove}>
            <BackArrow />
            <Canvas>
                <Suspense fallback={null}>
                    <Smiley posX={posX} posY={posY} />
                </Suspense>
            </Canvas>
        </div>
    )
}


export default SmileyPage