import heroImage from '../assets/images/hero-image.jpg'
import { Link } from 'react-router-dom'

const HeroSection = () => {

    return (
        <section className='hero-container'>
            <div className='hero-description'>
                <h1 className='hero-title'>Little Lemon</h1>
                <h2 className='hero-subtitle'>Chicago</h2>
                <p className='hero-text'>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <div className='hero-button'>
                    <Link to='/reservations' className={({ isActive }) => isActive ? "active-link" : ""}>Reserve a Table</Link>
                </div>
            </div>

            <div className='hero-image'>
                <img src={heroImage} alt='Hero Image' />
            </div>'
        </section>
    )
}

export default HeroSection