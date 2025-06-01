import { HeroSection } from '../components';
import { Highligths } from '../components';

const Home = () => {
    return (
        <main className='home-page padding'>
            <HeroSection />
            <Highligths />
        </main>
    );
};

export default Home;