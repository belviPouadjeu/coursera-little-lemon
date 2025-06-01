import { Link } from "react-router-dom";
import bruchetta from '../assets/images/bruchetta.svg';
import greekSalad from '../assets/images/greek_salad.jpg';
import lemonDessert from '../assets/images/lemon_dessert.jpg';

const Highligths = () => {
    return (

        <section className='highlights-section'>

            <div className='highlights-container'>
                <div className='highlights-banner'>
                    <h3>This weeks specals!</h3>
                    <Link to='/reservation'>
                        <button>Online Menu</button>
                    </Link>
                </div>
            </div>

            <div className="highlights-cards">

                <div className="highlight-items">
                    <img src={greekSalad} alt="foot" />
                    <div className="item-wrapper">
                        <div className="title-price">
                            <h4 class="item-title">Greek Salad</h4>
                            <h4 class="item-price">$12.99</h4>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese.garnished with crunchy garlic and rosemary croutons.</p>
                        <div className="order-btn">
                            <Link to='/#'>
                                <button>Order a delivery</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="highlight-items">
                    <img src={bruchetta} alt="foot" />
                    <div className="item-wrapper">
                        <div className="title-price">
                            <h4 class="item-title">Bruchetta</h4>
                            <h4 class="item-price">$5.99</h4>
                        </div>
                        <p>Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <div className="order-btn">
                            <Link to='/#'>
                                <button>Order a delivery</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="highlight-items">
                    <img src={lemonDessert} alt="foot" />
                    <div className="item-wrapper">
                        <div className="title-price">
                            <h4 class="item-title">Lemon Dessert</h4>
                            <h4 class="item-price">$5.00</h4>
                        </div>
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <div className="order-btn">
                            <Link to='/#'>
                                <button>Order a delivery</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highligths
