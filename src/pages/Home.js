import React from 'react'
import HomeComponent from '../components/HomeComponent'

const Home = (props) => {

    return (
        <div>
            <p>homepage</p>
            <HomeComponent title='Earth' link='/earth' imageUri='./assets/images/earth.png' />
            <HomeComponent title='Smiley' link='/smiley' imageUri='./assets/images/smiley.png' />

        </div>
    )

}

export default Home
