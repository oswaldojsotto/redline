const VidShape1 = () => {
  return (
    <svg
      viewBox="0 0 1862 518"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      <defs>
        <clipPath id="clipPath1">
          <path d="M97.6972 50.0761L185.501 3.34484C188.393 1.80522 191.62 1 194.897 1H1841C1852.05 1 1861 9.95431 1861 21V408.273C1861 415.647 1856.94 422.423 1850.44 425.904L1776.23 465.639L1688.75 514.464C1685.77 516.127 1682.41 517 1679 517H21C9.95434 517 1 508.046 1 497V115.498C1 108.231 4.94237 101.535 11.2974 98.0094L97.6972 50.0761Z" />
        </clipPath>
      </defs>

      <g clipPath="url(#clipPath1)">
        <foreignObject x="0" y="0" width="100%" height="100%">
          <video
            width="100%"
            height="100%"
            style={{
              objectFit: 'cover',
              transform: 'translateY(-20%)'
            }}
            autoPlay
            loop
            muted
          >
            <source src="/video/main.mp4" type="video/mp4" />
          </video>
        </foreignObject>
      </g>

      <path
        d="M97.6972 50.0761L185.501 3.34484C188.393 1.80522 191.62 1 194.897 1H1841C1852.05 1 1861 9.95431 1861 21V408.273C1861 415.647 1856.94 422.423 1850.44 425.904L1776.23 465.639L1688.75 514.464C1685.77 516.127 1682.41 517 1679 517H21C9.95434 517 1 508.046 1 497V115.498C1 108.231 4.94237 101.535 11.2974 98.0094L97.6972 50.0761Z"
        fill="none"
        stroke="#FF1A1A"
        strokeWidth="2"
      />
    </svg>
  );
};

export default VidShape1;
