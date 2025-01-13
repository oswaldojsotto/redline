import gsap from 'gsap';
import { useEffect, useState } from 'react';

const ThemeButton = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    gsap.from('#theme_button', {
      x: '-40%',
      duration: 2,
      ease: 'power3.in'
    });
    gsap.to('#theme_button', {
      x: '0',
      duration: 2.5,
      ease: 'power3.out'
    });
  }, []);

  return (
    <div
      id="theme_button"
      className={`mt-4 flex scale-[0.9] ${theme && 'glowing-svg'} cursor-pointer transition duration-700`}
      onMouseEnter={() => setTheme(true)}
      onMouseLeave={() => setTheme(false)}
    >
      <img
        className="w-full"
        src="/images/theme_rectangle.svg"
        onMouseEnter={() => setTheme(true)}
        onMouseLeave={() => setTheme(false)}
      ></img>
      <img
        className="-ml-[80px] scale-[0.25]"
        src="/images/moon.svg"
        onMouseEnter={() => setTheme(true)}
        onMouseLeave={() => setTheme(false)}
      ></img>
    </div>
  );
};

export default ThemeButton;
