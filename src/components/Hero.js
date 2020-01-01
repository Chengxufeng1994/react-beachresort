import React, { Component } from 'react';

class Hero extends Component {
    render() {
        const { hero, children } = this.props
        return (
            <div className={hero}>
                {children}
            </div >
        )
    }
}

Hero.defaultProps = {
    hero: "defaultHero"
}

export default Hero;