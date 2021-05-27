import React from 'react';
import './Footer.css';
// import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiYoutube } from "react-icons/fi";

function Footer() {
    return (
        <div className='footer__container'>
            {/* <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Zapraszamy do zapisania się do newslettera
        </p>
                <p className='footer-subscription-text'>
                    Możesz wypisać się w każdej chwili
        </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subskrybuj</Button>
                    </form>
                </div>
            </section> */}
            <div className='footer__links'>
                <div className='footer__link__wrapper'>
                    <div className='footer__link__items'>
                        <h2>O nas</h2>
                        <Link to='/kontakt'>Jak działamy?</Link>
                        <Link to='/kontakt'>Referencje</Link>
                        <Link to='/kontakt'>Kariera</Link>
                        <Link to='/kontakt'>Dla inwestora</Link>
                    </div>

                    <div className='footer__icons'>
                        <Link
                            className='social__icon__link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <span><FiFacebook /></span>
                        </Link>
                        <Link
                            className='social__icon__link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <span><FiInstagram /></span>
                        </Link>
                        <Link
                            className='social__icon__link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <span><FiYoutube /></span>
                        </Link>
                        <Link
                            className='social__icon__link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <span><FiTwitter /></span>
                        </Link>
                        <Link
                            className='social__icon__link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <span><FiLinkedin /></span>
                        </Link>
                    </div>
                    <div className='footer__link__items'>
                        <h2>Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                    {/* <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div> */}
                    {/* <div class='footer-link-items'>
                        <h2>Kontakt</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div> */}
                </div>
            </div>
            {/* <section class='social__media'>
                <div class='social__media__wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>

                            Jacek Maciejak
                            <i class="fas fa-tools"></i>
                        </Link>
                    </div>

                </div>
            </section> */}
        </div>
    );
}

export default Footer;
