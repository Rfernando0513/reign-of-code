import React, { useEffect } from 'react';
import Header from '../components/header/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/services/Services';
import Contact from '../components/Contact';


function Home() {
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        
        const handleScroll = () => {
          const scrollY = window.scrollY;
          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop - sectionHeight / 3 && scrollY < sectionTop + sectionHeight) {
              section.classList.add('active');
            } else {
              section.classList.remove('active');
            }
          });
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default Home;
