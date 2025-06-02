import { HeroSection } from '../components';
import { Highligths } from '../components';
import { Testimonials } from '../components';
import About from './About';

const Home = () => {
    return (
        <main className='home-page padding'>
            <HeroSection />
            <Highligths />
            <Testimonials />
            <About />
        </main>
    );
};

export default Home;