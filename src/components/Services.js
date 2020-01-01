import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.Id totam pariatur magnam minima labore vero quo error odit maiores at libero rem aut corporis cupiditate magni delectus architecto, sed sit.'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.Id totam pariatur magnam minima labore vero quo error odit maiores at libero rem aut corporis cupiditate magni delectus architecto, sed sit.'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.Id totam pariatur magnam minima labore vero quo error odit maiores at libero rem aut corporis cupiditate magni delectus architecto, sed sit.'
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.Id totam pariatur magnam minima labore vero quo error odit maiores at libero rem aut corporis cupiditate magni delectus architecto, sed sit.'
            }
        ]
    }
    render() {
        const { services } = this.state
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {services.map((service, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{service.icon}</span>
                                <h6>{service.title}</h6>
                                <p>{service.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default Services;