import Logo from './Logo';
import ThemeButton from './ThemeButton';
import UserButton from './UserButton';

const Header = () => {
  return (
    <div className="fixed z-30 flex h-[10vh] w-full justify-between">
      <div className="absolute flex scale-0 bg-transparent sm:-ml-2 sm:-mt-3 sm:scale-[0.6] md:-mt-[2px] md:scale-[0.7] md:gap-7 lg:ml-6 lg:mt-2 lg:scale-[0.9] xl:ml-14 xl:mt-[18px] xl:scale-[1.2]">
        <Logo showText={true} />
        <ThemeButton />
      </div>
      <nav className="align-midde absolute top-0 flex h-[10vh] w-full justify-center font-porscha text-primary">
        <ul className="flex scale-0 sm:my-[5%] sm:scale-[0.9] sm:gap-6 sm:text-[10px] md:text-[14px] lg:gap-12 lg:text-[16px] xl:text-[18px]">
          <li className="font-porschav3">
            <a className="glowing-text" href="#home">
              home
            </a>
          </li>
          <li className="font-porschav3">
            <a href="#vehicles">vehicles</a>
          </li>
          <li className="font-porschav3">
            <a href="#specifications">specifications</a>
          </li>
          <li className="font-porschav3">
            <a href="#shop">shop</a>
          </li>
        </ul>
      </nav>
      <div className="absolute scale-0 sm:-right-8 sm:mt-3 sm:scale-[0.6] md:-right-4 md:mt-6 md:scale-[0.7] lg:right-4 lg:mt-9 lg:scale-[0.9] xl:right-[50px] xl:mt-12 xl:scale-[1.2]">
        <div className="flex">
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
