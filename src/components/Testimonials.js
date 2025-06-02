import testimonialOne from '../assets/images/testimonial_one.jpg';
import testimonialTwo from '../assets/images/testimonial_two.jpg';
import testimonialThree from '../assets/images/testimonial_three.jpg';
import start from '../assets/images/start.png';


const Testimonials = () => {
    return (
        <section className='testimonials'>
            <div className='testimonials-container'>
                <div className='testimonials-headline'>
                    <h2>Testimonials</h2>
                    <h4>Read what others have to say about us</h4>
                </div>

                <div className='reviews'>

                    <div className='review'>
                    <div className='reviews-wrapper'>
                        <img src={testimonialOne} alt='customer' className='client' />
                        <div className='client-detail'>
                            <h5>Thapo</h5>
                            <span className="stars" aria-label="4.5 out of 5 stars">4.5
                                <img src={start} alt="star" className="star"/>
                            </span>
                        </div>
                        <p>
                            This is the best Mediterranean food that I've ever had!
                        </p>
                    </div>
                </div>

                <div className='review'>
                    <div className='reviews-wrapper'>
                        <img src={testimonialTwo} alt='customer' className='client' />
                        <div className='client-detail'>
                            <h5>Mbida</h5>
                            <span className="stars" aria-label="4.5 out of 5 stars">5
                                <img src={start} alt="star" className="star"/>
                            </span>
                        </div>
                        <p>
                            I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here.
                        </p>
                    </div>
                </div>

                <div className='review'>
                    <div className='reviews-wrapper'>
                        <img src={testimonialThree} alt='customer' className='client' />
                        <div className='client-detail'>
                            <h5>Oumarou</h5>
                            <span class="stars" aria-label="4.5 out of 5 stars">4.9
                                <img src={start} alt="star" className="star"/>
                            </span>
                        </div>
                        <p>
                            This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials