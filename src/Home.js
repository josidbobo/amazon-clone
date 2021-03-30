import React from 'react';
import './Home.css';
import Product from './Product';
import amazon_image from './images/amazon_image.jpg';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                src={amazon_image} alt="" />

                <div className='home__row'>
                    <Product id='1000'
                    title='The lean startup: How Constant Innovation
                    Creates Radically Successful Businesses Paperback'
                    price={29.99} 
                    image={require('./images/lean_startup.jpg')}
                    rating={5} 
                    />
                    <Product id='2000'
                    title='Kenwood kMix Stand Mixer for 
                    Baking, Stylish Kitchen Mixer with K-beater, 
                    Dough Hook and Whisk, 5 litre Glass Bowl'
                    price={239.42} 
                    image={require('./images/kitchen_mixer.jpg')}
                    rating={3}
                    />
                </div>

                <div className='home__row'>
                    <Product
                    id='3000'
                    title="Samsung LC49G 49'Curved LED Gaming 
                    Monitor" price={324.32} rating={3}
                    image={require('./images/wrist_watch.jpg')}/>

                    <Product
                    id='4000' title='Amazon Echo (3rd Generation) 
                    | Smart speaker with Alexa, Charcoal Fabric' price={98.99}
                     rating={4} image={require('./images/bluetooth.jpg')}/>

                    <Product
                    id='5000' 
                    title='New Apple iPad Pro(12.9-inch, Wi-Fi, 128GB)
                     - Silver (4th Generation)' price={598.32} 
                     rating={5} image={require('./images/ipad.png')}/>
                </div>

                <div className='home__row'>
                    <Product
                    id='6000'
                    title="Samsung LC43532384382723822 49' Curved LED Gaming Monitor
                     - Super Ultra Wide dual WQHD 5120 x 1440"
                     rating={4} price={1423.23}
                     image={require('./images/samsung_tv.jpg')}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
