import React, { Component } from 'react';
import { RoomContext } from '../context';
import Title from './Title'
// 獲取所有唯一的值
const getUnique = (items, value) => {
    // 利用 new Set建立一個集合
    // 利用...回傳一個Array
    return [...new Set(items.map(item => {
        return item[value]
    }))]
}
class RoomsFilter extends Component {
    static contextType = RoomContext;
    render() {
        console.log(this.context)
        const {
            rooms,
            handleChange,
            type,
            capacity,
            price,
            minPrice,
            maxPrice,
            minSize,
            maxSize,
            breakfast,
            pets } = this.context;

        // 獲取所有的type
        let types = getUnique(rooms, "type")
        // types加入all
        types = ['all', ...types]
        // map types to jsx
        types = types.map((type, index) => {
            return (
                <option key={index} value={type}>
                    {type}
                </option>
            )
        })

        let people = getUnique(rooms, "capacity")
        people = people.map((capacity, index) => {
            return (
                <option key={index} value={capacity}>
                    {capacity}
                </option>
            )
        })

        return (
            <section className="filter-container" >
                <Title title='search rooms' />
                <form className='filter-form'>
                    <div className="form-group">
                        {/* select type */}
                        <label htmlFor="type">Room type</label>
                        <select
                            className="form-control"
                            id="type"
                            name="type"
                            value={type}
                            onChange={handleChange}>
                            {types}
                        </select>
                    </div>
                    {/* end selet type */}
                    {/* guests type */}
                    <div className="form-group">
                        <label htmlFor="capacity">Guests</label>
                        <select
                            className="form-control"
                            id="capacity"
                            name="capacity"
                            value={capacity}
                            onChange={handleChange}>
                            {people}
                        </select>
                    </div>
                    {/* end of guests type */}
                    {/* room price */}
                    <div className="form-group">
                        <label htmlFor="price">Room Price ${price}</label>
                        {/* html slider */}
                        <input type="range"
                            id="price"
                            className="form-control"
                            name="price"
                            min={minPrice}
                            max={maxPrice}
                            value={price}
                            onChange={handleChange}>
                        </input>
                    </div>
                    {/* end of room price  */}
                    {/* room size */}
                    <div className="form-group">
                        <label htmlFor="size">Room Size</label>
                        <div className="size-inputs">
                            <input
                                type="number"
                                id="minSize"
                                className="size-input"
                                name="minSize"
                                value={minSize}
                                onChange={handleChange} >
                            </input>
                            <input
                                type="number"
                                id="size"
                                className="size-input"
                                name="maxSize"
                                value={maxSize}
                                onChange={handleChange}>
                            </input>
                        </div>
                    </div>
                    {/* end of room size  */}
                    {/* extras */}
                    <div className="form-group">
                        <div className="single-extra">
                            <input
                                type="checkbox"
                                name="breakfast"
                                id="breakfast"
                                checked={breakfast}
                                onChange={handleChange} />
                            <label htmlFor="breakfast">breakfast</label>
                        </div>
                        <div className="single-extra">
                            <input
                                type="checkbox"
                                name="pets"
                                id="pets"
                                checked={pets}
                                onChange={handleChange} />
                            <label htmlFor="pets">pets</label>
                        </div>
                    </div>
                    {/* end of extras */}
                </form>
            </section >
        )
    }
}

export default RoomsFilter