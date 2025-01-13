/* eslint-disable react/prop-types */

import gsap from 'gsap';
import { useEffect } from 'react';

const Logo = ({ showText }) => {
  useEffect(() => {
    gsap.from('#logo', {
      x: '-50%',
      duration: 3,
      ease: 'power1.in'
    });
    gsap.to('#logo', {
      x: '0',
      duration: 3,
      ease: 'power1.out'
    });
  }, []);

  return (
    <div
      id="logo"
      className="-gap-1 mx-4 mt-4 flex scale-[1] flex-col"
    >
      <img
        className="glowing-svg mx-[9px] flex h-[45px] w-[55px] justify-center"
        src="/images/logo.svg"
        alt="Logo"
      />
      {showText && (
        <h1 className="-mt-2 glowing-text font-porscha text-primary">
          redline
        </h1>
      )}
    </div>
  );
};

export default Logo;
