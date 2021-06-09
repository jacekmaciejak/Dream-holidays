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
    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className='filter-container'>
            <Title title='wyszukaj wakacje' />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">Rodzaj wakacji</label>
                    <select name="type" id="type" value={type} onChange={handleChange} className="form-control">
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Goście</label>
                    <select name="capacity" id="capacity" value={capacity} onChange={handleChange} className="form-control">
                        {people}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">cena wakacji {price} zł</label>
                    <input type="range" className="form-control" name='price' min={minPrice}
                        max={maxPrice} id='price' value={price} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="size">powierzchnia pokoju</label>
                    <input type="number" className="size-input" name='minSize'
                        id='size' value={minSize} onChange={handleChange} />
                    <input type="number" className="size-input" name='maxSize'
                        id='size' value={maxSize} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">śniadania</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name='pets' id='pets' checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">zwierzęta</label>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default RoomsFilter
