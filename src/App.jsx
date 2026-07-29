import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import { LanguageProvider } from './context/LanguageContext';
import PreOrderModal from './components/PreOrderModal';
import FloatingAIWidget from './components/FloatingAIWidget';
import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import FirstVideo from './sections/FirstVideo';
import Jason from './sections/Jason';
import SecondVideo from './sections/SecondVideo';
import Lucia from './sections/Lucia';
import PostCard from './sections/PostCard';
import TanzaniaSection from './sections/TanzaniaSection';
import Final from './sections/Final';
import Outro from './sections/Outro';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <LanguageProvider>
      <main className="relative min-h-screen bg-black text-white selection:bg-amber-400 selection:text-black overflow-x-hidden w-full">
        <NavBar />
        <Hero />

        <FirstVideo />
        <Jason />

        <SecondVideo />
        <Lucia />

        <PostCard />
        <TanzaniaSection />

        <Final />
        <Outro />

        <Footer />
        <PreOrderModal />
        <FloatingAIWidget />
      </main>
    </LanguageProvider>
  );
};

export default App;