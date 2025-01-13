const VideoPlayer = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 329 186"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="clip-path">
          <path d="M18 18.5L28.2744 7.40857C32.0595 3.32257 37.3769 1 42.9466 1H308C319.046 1 328 9.9543 328 21V142.695C328 147.714 326.113 152.55 322.713 156.242L313.098 166.685L302.889 178.241C299.092 182.539 293.634 185 287.9 185H21C9.95431 185 1 176.046 1 165V45.2322C1 40.3348 2.79697 35.6076 6.05022 31.9468L18 18.5Z" />
        </clipPath>
      </defs>

      <foreignObject
        width="100%"
        height="100%"
        clipPath="url(#clip-path)"
      >
        <video width="100%" height="100%" autoPlay loop muted>
          <source src="/video/main.mp4" type="video/mp4" />
        </video>
      </foreignObject>

      <path
        d="M18 18.5L28.2744 7.40857C32.0595 3.32257 37.3769 1 42.9466 1H308C319.046 1 328 9.9543 328 21V142.695C328 147.714 326.113 152.55 322.713 156.242L313.098 166.685L302.889 178.241C299.092 182.539 293.634 185 287.9 185H21C9.95431 185 1 176.046 1 165V45.2322C1 40.3348 2.79697 35.6076 6.05022 31.9468L18 18.5Z"
        stroke="#FF1A1A"
        strokeWidth="1"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export default VideoPlayer;
