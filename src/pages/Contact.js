import React from 'react'
import Address from '../components/Address/Address'
import ContactForm from '../components/ContactForm/ContactForm'
import Hero from '../components/Hero/Hero'
import './Contact.css'
function Contact() {
    return (
        <>
            <Hero hero='contactHero'>
                <div className='contact__wrapper'>
                    <Address />
                    <ContactForm />
                </div>
            </Hero>

        </>

    )
}

export default Contact
