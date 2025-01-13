import ModelViewer from './ModelViewer';

import gsap from 'gsap';
import { useEffect } from 'react';
import ScrollDown from './ScrollDown';
import Testimonies from './Testimonies';
import VideoPlayer from './VideoPlayer';

const Background = () => {
  useEffect(() => {
    gsap.from('#car', { x: '10%', duration: 2 });
    gsap.to('#car', { x: '0', duration: 2.5, ease: 'power3.out' });
    gsap.from('#title1', { x: '-40%', duration: 2 });
    gsap.to('#title1', { x: '0', duration: 2, ease: 'power3.out' });
    gsap.from('#title2', { x: '20%', duration: 2 });
    gsap.to('#title2', { x: '0', duration: 2, ease: 'power3.out' });
    gsap.to('#title3', { x: '10%', duration: 2 });
    gsap.from('#title4', { x: '30%', duration: 2 });
    gsap.to('#title4', { x: '0', duration: 2, ease: 'power3.out' });
    gsap.from('#scrolldown', {
      y: '-100 %',
      duration: 1,
      ease: 'power3.in'
    });
    gsap.to('#scrolldown', {
      y: '0',
      duration: 2,
      ease: 'power3.out'
    });
    gsap.from('#rectanglemain', {
      paddingLeft: '0%',
      paddingRight: '0%',
      duration: 2
    });
    gsap.to('#rectanglemain', {
      paddingLeft: '2%',
      paddingRight: '2%',
      duration: 2,
      ease: 'power3.out'
    });
  }, []);

  return (
    <div className="relative mt-[rem] h-full w-full max-w-[100%] overflow-hidden">
      <div className="z-1 absolute -mt-[13%] flex h-full w-full items-center justify-center gap-2 bg-transparent pl-[5%] font-porscha text-primary">
        <h2
          id="title1"
          className="mt-1 flex font-porscha3ditalic text-[1rem] xs:text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[4rem] xl:mt-4"
        >
          The
        </h2>
        <h1
          id="title2"
          className="font-porschabolditalic text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7rem]"
        >
          Ultimate
        </h1>
      </div>
      <div className="absolute z-10 -mt-[8%] flex h-full w-full items-center justify-center gap-2 bg-transparent font-porscha text-primary">
        <h1
          id="title3"
          className="-ml-[10%] font-porschabolditalic text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7rem]"
        >
          refreshing
        </h1>
      </div>
      <div className="absolute z-10 -mt-[3%] flex h-full w-full items-center justify-center gap-2 bg-transparent pl-[30%] font-porscha text-primary">
        <h2
          id="title4"
          className="-mr-[45%] mt-1 flex font-porscha3ditalic text-[1rem] xs:text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[4rem] xl:mt-4"
        >
          ride
        </h2>
      </div>
      <div className="">
        <ModelViewer />
      </div>
      <img
        src="images/bg.png"
        alt="Background"
        className="object-cover w-full h-full"
      />

      <div className="absolute -ml-[0.5%] -mt-[56.5%] overflow-hidden">
        {/* <img id="car" src="/images/car.png" /> */}
      </div>

      <div className="absolute top-0 z-10 w-full pt-[3%]">
        <img
          id="rectanglemain"
          className="w-full"
          src="/images/rectangle.svg"
        ></img>
        <section className="-mt-[3rem] flex w-full justify-between">
          <div className="ml-4 scale-0 sm:-ml-[9rem] sm:scale-[0.3] md:-ml-[5rem] md:scale-[0.6] lg:-ml-[2rem] lg:-mt-3 lg:scale-[0.8] xl:-mt-6 xl:ml-3 xl:scale-[1]">
            <Testimonies />
          </div>
          <div className="absolute right-12 mt-2 w-[4rem] scale-[0] xs:scale-[1] sm:right-12 sm:-mt-4 sm:w-[7rem] md:right-16 md:-mt-8 md:w-[10rem] lg:right-20 lg:-mt-12 lg:w-[12rem] xl:right-28 xl:-mt-16 xl:w-[14rem]">
            <VideoPlayer />
          </div>

          <div
            id="scrolldown"
            className="absolute w-[12rem] rotate-90 scale-0 overflow-hidden sm:-right-[70px] sm:-mt-[6rem] sm:scale-[0.4] md:-right-14 md:-mt-[8rem] md:scale-[0.6] lg:-right-[3.5rem] lg:scale-[0.7] xl:-right-[3rem] xl:-mt-[12rem] xl:scale-[0.9]"
          >
            <ScrollDown />
          </div>
        </section>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[10%] bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
};

export default Background;
