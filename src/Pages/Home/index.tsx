import clsx from 'clsx';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Logo from '../../Logo.png';
import Contact from './Contact';
import classes from './Home.module.css';
import Team from './Team';
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import LoLLogo from '../../Assets/lol.png';
import ValornatLogo from '../../Assets/valorant.png';
import TFTLogo from '../../Assets/tft.png';
import Highlights from './Highlights';


const ITEMS = [
  {
    name: 'Valorant',
    image: ValornatLogo,
  },
  {
    name: 'League of Legends',
    image: LoLLogo,
  },
  {
    name: 'Team Fight Tactics',
    image: TFTLogo
  }
]

const Home = () => {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [ isLogoShow, setIsLogoShow ] = useState(true);
  const [ isBannerShowing, setIsBannerShowing ] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const docScroll = document.documentElement.scrollTop;

      if (imageRef.current) {
        const imageHeight = imageRef.current.scrollHeight;
        const imageOffsetTop = imageRef.current.offsetTop;
        const isBottom = docScroll > (imageHeight + imageOffsetTop);
        setIsLogoShow(!isBottom);
      }

      if (bannerRef.current) {
        const bannerHeight = bannerRef.current.scrollHeight;
        const bannerOffsetTop = bannerRef.current.offsetTop;
        const isBottom = docScroll > (bannerHeight + bannerOffsetTop - 64);
        setIsBannerShowing(!isBottom);
      }
    })
  }, []);
  
  return (
    <div>
      <Navbar showLogo={!isLogoShow} backgroundColor={isBannerShowing ? '' : 'rgba(0,0,0,0.52)'} />
      <div ref={bannerRef} className={classes.banner}>
        <img src={Logo} alt="logo" className={classes.image} ref={imageRef} />
        <FontAwesomeIcon icon={faChevronDown} className={classes.downIcon} />
      </div>
      <div className="container">
        <Marquee className={classes.marquee} speed={200}>
          {ITEMS.map(item => 
            <Fragment key={item.name}>
              <img src={item.image} alt={item.name} className={classes['marquee-image']} />
              <FontAwesomeIcon icon={faCircle} className={classes.icon}/>
            </Fragment>
          )}
        </Marquee>
      </div>
      <div className={clsx(classes.section, 'bg-gray')}>
        <Team />
      </div>
      <div className={clsx(classes.section, 'bg-white')}>
        <Highlights />
      </div>
      <div className={clsx(classes.section, classes.banner2)}>
        <div className="container">
          <h1>More Coming Soon</h1>
        </div>
      </div>
      <div className={classes.section}>
        <Contact />
      </div>
    </div>
  );
};

export default Home;