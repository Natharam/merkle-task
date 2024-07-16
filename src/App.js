import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import intro from './assests/intro.webp'
import nameBlack from './assests/name-black.svg'
import sarah from './assests/sarah.png'
import chris from './assests/chris.png'
import arrow from './assests/arrow.svg'
import general from './assests/general.webp'
import './App.css';
import AutoPlay from './components/Slider';

const labels = ['Capital', '+ Strategy', '+ Partnerships', '+ Technology', '+ Ecosystem']

const socials = ['TWITTER', 'LINKEDIN', 'PRIVACY POLICY', '2024 ©MERKLE 3S CAPITAL']

function App() {
  const [height, setHeight] = useState(132)
  const [scrollY, setScrollY] = useState(132)

  useEffect(() => {
    window.addEventListener("scroll", updateDimensions)

    return () => {
      window.removeEventListener("scroll", updateDimensions)
    }
  }, [])

  const updateDimensions = () => {
    const scrolled = window.scrollY >= window.innerHeight
    setScrollY(scrolled)
    const value = height - window.scrollY < 81 ? 81 : height - window.scrollY
    setHeight(value);
  }

  return (
    <div className='wrapper' >
      <Header height={height} scrollY={scrollY} />
      <main className="main" style={{ top: height }}>
        <article className='widget widget-1'>
          <div className="left">
            <h3>Web3 is the future</h3>
            <button className='get-in-touch'>Get in touch</button>
          </div>
          <div className="right">
            <img src={general} alt='general' className='general' />
          </div>
        </article>
        <article className='widget widget-2'>
          <div className="left">
            <h5>About us</h5>
            <h2>Investing Fearlessly in the Future</h2>
            <h3>
              Merkle 3s Capital is a venture capital firm that invests in innovative Web3 startups with the potential to shape the future.
              We aim to be the first hybrid crypto fund originated from Hong Kong, leading the industry with worldwide impact.
              Our mission is to identify and support the next generation of leaders in Web3.
            </h3>
          </div>
          <div className="right">
            {labels.map(item => (
              <h6 key={item}>{item}</h6>
            ))}
          </div>
        </article>
        <article className='widget widget-3'>
          <div className="left">
            <h5>Our portfolio</h5>
            <h2>We back great founders & teams, building products of the future
            </h2>
          </div>
          <div className="block-bottom">
            <AutoPlay />
          </div>
        </article>
        <article className='widget widget-4'>
          <div className="left">
            <img src={intro} alt='intro' className='intro' />
          </div>
          <div className="right">
            <h2>“We are always excited to work with founders that think & execute faster...”</h2>
            <h3>Chris Lee, Founding Partner</h3>
          </div>
        </article>
        <article className='widget widget-5'>
          <h3>About us</h3>
          <div className='image-container'>
            <div className="left">
              <img src={chris} alt='chris' className='chris' />
              <h6>About us</h6>
              <small>About us</small>
            </div>
            <div className="right">
              <img src={sarah} alt='chris' className='sarah' />
              <h6>About us</h6>
              <small>About us</small>
            </div>
          </div>
        </article>
      </main>
      <article className='bottom-widget'>
        <div className='content'>
          <button className='up-arrow'>
            <img src={arrow} alt="arrow" />
          </button>
          <div className="list">
            {socials.map(item => (
              <h6 key={item}>{item}</h6>
            ))}
          </div>
          <img src={nameBlack} alt='name' className='name' />
        </div>
      </article>
    </div>
  );
}

export default App;
