import gsap from 'gsap';
import { useEffect, useState } from 'react';

const UserButton = () => {
  const [hoverUser, setHoverUser] = useState(false);
  const [hoverPre, setHoverPre] = useState(false);

  useEffect(() => {
    gsap.from('#rightset', {
      x: '20%',
      duration: 2,
      ease: 'power3.in'
    });
    gsap.to('#rightset', {
      x: '0',
      duration: 2,
      ease: 'power3.out'
    });
  }, []);
  return (
    <div
      id="rightset"
      className="flex h-10 overflow-hidden -gap-6 z-200"
    >
      <div className="absolute flex ml-8 -mt-1 gap-11">
        <img
          onMouseEnter={() => setHoverUser(true)}
          onMouseLeave={() => setHoverUser(false)}
          className={`scale-[0.8] ${hoverUser && 'glowing-svg'} cursor-pointer transition duration-700`}
          src="/images/usericon.svg"
        ></img>
        <h1
          className={`mt-4 font-porscha text-[13px] text-primary ${hoverPre && 'glowing-text'} cursor-pointer transition-all`}
          onMouseEnter={() => setHoverPre(true)}
          onMouseLeave={() => setHoverPre(false)}
        >
          pre-order
        </h1>
      </div>
      <div className="flex">
        <img
          className={`${hoverUser && 'glowing-svg'} cursor-pointer transition duration-700`}
          src="/images/rectangle5.svg"
          onMouseEnter={() => setHoverUser(true)}
          onMouseLeave={() => setHoverUser(false)}
        ></img>
        <img
          className={`-ml-6 ${hoverPre && 'glowing-svg'} cursor-pointer transition duration-700`}
          src="/images/rectangle4.svg"
          onMouseEnter={() => setHoverPre(true)}
          onMouseLeave={() => setHoverPre(false)}
        ></img>
      </div>
    </div>
  );
};

export default UserButton;
