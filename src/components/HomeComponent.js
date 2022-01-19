import React from 'react'
import { Link } from 'react-router-dom'
import './HomeComponent.css'


const HomeComponent = (props) => {

    return (
        <Link className='home-component-container' to={props.link}>
            <img src={props.imageUri} />
            <h2>{props.title}</h2>
        </Link>

    )
}

export default HomeComponent