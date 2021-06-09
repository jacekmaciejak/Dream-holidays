import React from 'react'
import './ContactForm.css'

function ContactForm() {
    return (
        <section className='contact__container'>
            <form>
                <h2>napisz do nas</h2>
                <div className="inputBox">
                    <input type="text" name='' required='required' />
                    <span>imie i nazwisko</span>
                </div>
                <div className="inputBox">
                    <input type="text" name='' required='required' />
                    <span>email</span>
                </div>
                <div className="inputBox">
                    <textarea cols="30" rows="10" required='required'></textarea>
                    <span>napisz wiadomosc</span>
                </div>
                <div className="inputBox">
                    <input type="submit" value='Wyślij' />
                </div>
            </form>
        </section>
    )
}

export default ContactForm
