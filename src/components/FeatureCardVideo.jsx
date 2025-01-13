const FeatureCardVideo = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 656 306"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="clip-path-feature-vid">
          <path d="M443.739 7.29286C440.136 3.28737 435.001 1 429.614 1L169.916 1.00006H19.9999C9.50653 1.00006 0.999939 9.50665 0.999939 20.0001V285.5C0.999939 295.993 9.50653 304.5 19.9999 304.5H265.84H636C646.493 304.5 655 295.993 655 285.5V96.6752C655 86.1818 646.493 77.6752 636 77.6752L516.41 77.6751C510.455 77.6751 504.78 75.147 500.798 70.7198L443.739 7.29286Z" />
        </clipPath>
      </defs>

      <foreignObject
        width="100%"
        height="100%"
        clipPath="url(#clip-path-feature-vid)"
      >
        <div className="absolute left-5 top-5 text-primary">
          <p className="font font-porschalaseritalic text-[2rem] xs:text-[3rem]">
            04
          </p>
        </div>
        <div className="absolute leading-9 bottom-5 left-5 text-primary">
          <p className="font font-porschaitalic text-[2rem] xs:text-[3rem]">
            Holographic <br /> Display
          </p>
        </div>
        <div className="absolute bottom-6 right-0 w-[40%]">
          <img src="/video/velocity2.gif"></img>
        </div>

        <video width="100%" height="100%" autoPlay loop muted>
          <source src="/video/road.mp4" type="video/mp4" />
        </video>
      </foreignObject>

      <path
        d="M443.739 7.29286C440.136 3.28737 435.001 1 429.614 1L169.916 1.00006H19.9999C9.50653 1.00006 0.999939 9.50665 0.999939 20.0001V285.5C0.999939 295.993 9.50653 304.5 19.9999 304.5H265.84H636C646.493 304.5 655 295.993 655 285.5V96.6752C655 86.1818 646.493 77.6752 636 77.6752L516.41 77.6751C510.455 77.6751 504.78 75.147 500.798 70.7198L443.739 7.29286Z"
        stroke="#FF1A1A"
        strokeWidth="2"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export default FeatureCardVideo;
