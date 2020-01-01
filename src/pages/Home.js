import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Components
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Hero>
                    <Banner
                        title="luxurious rooms"
                        subtitle="deluxe rooms starting at $299">
                        <Link
                            className="btn-primary"
                            to="/rooms">
                            Our rooms
                        </Link>
                    </Banner>
                </Hero>
                <Services />
                <FeaturedRooms />
            </React.Fragment>
        )
    }
}

export default Home;