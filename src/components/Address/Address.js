import React from 'react'
import './Address.css'
import { FaPhone } from 'react-icons/fa'
import { GiEarthAsiaOceania } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'

function Address() {
    return (
        <section className='address__container'>
            <div className="address__item">
                <span><GiEarthAsiaOceania /></span>
                <div className="address__info">
                    <h3>Adres</h3>
                    <p>Lorem, ipsum dolor.</p>
                </div>
            </div>
            <div className="address__item">
                <span><FaPhone /></span>
                <div className="address__info">
                    <h3>Telefon</h3>
                    <p>Lorem, ipsum dolor.</p>
                </div>

            </div>
            <div className="address__item">
                <span><MdEmail /></span>
                <div className="address__info">
                    <h3>Email</h3>
                    <p>Lorem, ipsum dolor.</p>
                </div>

            </div>

        </section>
    )
}

export default Address
