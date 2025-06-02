import { HeroSection } from '../components';
import { Highligths } from '../components';
import { Testimonials } from '../components';

const Home = () => {
    return (
        <main className='home-page padding'>
            <HeroSection />
            <Highligths />
            <Testimonials />
        </main>
    );
};

export default Home;