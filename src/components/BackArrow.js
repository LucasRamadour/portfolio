import react from 'react'
import { Link } from 'react-router-dom'
import './BackArrow.css'

const BackArrow = () => {

    return (

        <Link to='/' className='back-arrow-div'>
            <p className='back-arrow'>⮜</p>
        </Link>

    )
}

export default BackArrow