const VidShape2 = () => {
  return (
    <svg
      viewBox="0 0 1860 306"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      <defs>
        <clipPath id="clipPath2">
          <path d="M1246.53 2.31474C1244.32 1.44596 1241.97 1 1239.59 1L481.775 1.00006H20C9.50659 1.00006 1 9.50665 1 20.0001V286C1 296.493 9.50659 305 20 305H753.754H1840C1850.49 305 1859 296.493 1859 286V96.8007C1859 86.3073 1850.49 77.8007 1840 77.8006L1442.73 77.8006C1440.11 77.8006 1437.5 77.3077 1435.06 76.3475L1246.53 2.31474Z" />
        </clipPath>
      </defs>

      <g clipPath="url(#clipPath2)">
        <foreignObject x="0" y="0" width="100%" height="100%">
          <video
            width="100%"
            height="100%"
            style={{
              objectFit: 'cover',
              transform: 'translateY(-40%)'
            }}
            autoPlay
            loop
            muted
          >
            <source src="/video/road.mp4" type="video/mp4" />
          </video>
        </foreignObject>
      </g>

      <path
        d="M1246.53 2.31474C1244.32 1.44596 1241.97 1 1239.59 1L481.775 1.00006H20C9.50659 1.00006 1 9.50665 1 20.0001V286C1 296.493 9.50659 305 20 305H753.754H1840C1850.49 305 1859 296.493 1859 286V96.8007C1859 86.3073 1850.49 77.8007 1840 77.8006L1442.73 77.8006C1440.11 77.8006 1437.5 77.3077 1435.06 76.3475L1246.53 2.31474Z"
        fill="none"
        stroke="#FF1A1A"
        strokeWidth="2"
      />
    </svg>
  );
};

export default VidShape2;
