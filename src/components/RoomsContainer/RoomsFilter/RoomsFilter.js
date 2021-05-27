import React from 'react'
import './RoomsFilter.css'
import { useContext } from 'react'
import { RoomContext } from '../../../context'
import Title from '../../Title/Title'

//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;
    //get unique types
    let types = getUnique(rooms, 'type')
    //add all
    types = ['all', ...types]
    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className='filter-container'>
            <Title title='search rooms' />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} onChange={handleChange} className="form-control">
                        {types}
                    </select>
                </div>
            </form>
        </section>
    )
}

export default RoomsFilter
