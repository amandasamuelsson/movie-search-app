import Layout from 'antd/lib/layout/layout';
import React, { CSSProperties } from 'react'; 
import background from '../../assets/background.png';




function WelcomeTitle() {
    return (
        <Layout>
            <img src={background} alt="backgroundPicture" style={backgroundImageStyle} />

            <div style={welcomeTextStyle}> 
                <h1>Welcome to your favourite movie search app!</h1>
                <h2>Search for movies, see the details and rating, add them to your watchlist</h2>
            </div>
        </Layout>

    )
}

const backgroundImageStyle: CSSProperties={
    backgroundSize: 'cover', 
}

const welcomeTextStyle: CSSProperties ={
    color: 'white', 

    
}

export default WelcomeTitle; 