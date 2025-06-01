import heroImage from '../assets/images/hero-image.jpg'

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <div className='hero-description'>
                <h1 className='hero-title'>Little Lemon</h1>
                <h2 className='hero-subtitle'>Chicago</h2>
                <p className='hero-text'>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button className='hero-button'>Reserve a Table</button>
            </div>
            <div className='hero-image'>
                <img src={heroImage} alt='Hero Image' />
            </div>'
        </div>
    )
}

export default HeroSection