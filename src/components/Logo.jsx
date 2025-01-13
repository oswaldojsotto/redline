/* eslint-disable react/prop-types */

const Logo = ({ showText }) => {
  return (
    <div className="-gap-1 mx-4 mt-4 flex scale-[1] flex-col">
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
