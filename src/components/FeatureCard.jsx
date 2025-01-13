const FeatureCard = () => {
  return (
    <div className="relative max-w-[18rem]">
      <img
        className=""
        src="/images/featurecard.svg"
        alt="feature card"
      />
      <p className="font-porschalaseritalic absolute right-0 top-0 m-2 text-primary sm:text-[1rem] md:text-[1.2rem] lg:text-[1.4] xl:text-[1.6rem]">
        01
      </p>
      <p className="font-porschaitalic absolute bottom-1 left-0 m-2 leading-3 text-primary sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5] xl:text-[1.8rem] xl:leading-5">
        eco- <br /> friendly
      </p>
    </div>
  );
};

export default FeatureCard;
