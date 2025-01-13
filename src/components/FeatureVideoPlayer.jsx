import Logo from './Logo';

const FeatureVideoPlayer = () => {
  return (
    <div
      style={{ position: 'relative', width: '100%', height: 'auto' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1174 526"
        style={{
          width: '100%',
          height: 'auto'
        }}
      >
        <defs>
          <clipPath id="clip-path-feature">
            <path d="M109.236 17.2314C118.528 6.89999 131.771 1 145.667 1H543.454H869.542H1123.5C1150.56 1 1172.5 22.938 1172.5 50V409.847C1172.5 436.909 1150.56 458.847 1123.5 458.847H919.86C905.944 458.847 892.631 464.534 883.011 474.589L849.25 509.875C840.006 519.536 827.216 525 813.845 525H50C22.938 525 1 503.062 1 476V156.359C1 144.259 5.47708 132.587 13.569 123.59L109.236 17.2314Z" />
          </clipPath>
        </defs>

        <foreignObject
          width="100%"
          height="100%"
          clipPath="url(#clip-path-feature)"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <video
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            style={{
              objectFit: 'cover',
              clipPath: 'url(#clip-path-feature)'
            }}
          >
            <source src="/video/feature.mp4" type="video/mp4" />
          </video>
        </foreignObject>

        <foreignObject
          width="100%"
          height="100%"
          clipPath="url(#clip-path-feature)"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className="z-2 bg-transparent-300 absolute mx-8 flex h-auto flex-col pt-[10px]">
            <div className="font-porschav3 my-8 ml-4 mt-16 w-full text-[44px] leading-10 text-primary">
              <div className="mx-60 my-2 scale-[2]">
                <Logo />
              </div>
              <p>
                The Coca-Cola Car combines <br /> eco-conscious
                technology <br />
                with innovative daily <br />
                solutions to redefine <br /> urban mobility.
              </p>
              <p className="font-tektur my-8 text-[21px] text-sm leading-6 text-[#C55E5E]">
                The Coca-Cola Car redefines urban mobility with
                zero-emission technology and <br /> smart solutions
                like self-cleaning interiors, modular seating, and
                built-in beverage <br /> dispensers, offering a
                seamless and sustainable driving experience.
              </p>
            </div>
          </div>
        </foreignObject>

        <path
          d="M109.236 17.2314C118.528 6.89999 131.771 1 145.667 1H543.454H869.542H1123.5C1150.56 1 1172.5 22.938 1172.5 50V409.847C1172.5 436.909 1150.56 458.847 1123.5 458.847H919.86C905.944 458.847 892.631 464.534 883.011 474.589L849.25 509.875C840.006 519.536 827.216 525 813.845 525H50C22.938 525 1 503.062 1 476V156.359C1 144.259 5.47708 132.587 13.569 123.59L109.236 17.2314Z"
          stroke="#FF1A1A"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default FeatureVideoPlayer;
