import FeatureCard from './FeatureCard';
import FeatureCardVideo from './FeatureCardVideo';
import FeatureVideoPlayer from './FeatureVideoPlayer';
import VideoPlayer from './VideoPlayer';

const Features = () => {
  return (
    <div className="h-[80vh] xs:h-[110vh] sm:h-[45vh] md:h-[60vh] lg:h-[60vh] xl:h-[70vh]">
      <div className="font-porschaitalic bg-black px-4 text-[2rem] text-primary sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem]">
        Features
      </div>
      <div className="flex flex-col-reverse justify-between h-full gap-4 px-4 overflow-hidden bg-black sm:flex-row sm:gap-0">
        <div className="h-full w-full sm:my-0 sm:w-[60%] sm:pr-2">
          <div className="absolute w-[93%] sm:w-[65%]">
            <FeatureVideoPlayer />
            <p className="absolute bottom-0 right-2 z-30 font-porscha text-[8px] text-primary md:text-[12px] lg:text-[16px]">
              <span className="font-mono">©</span> coca - cola
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start sm:w-[33%] sm:pl-2">
          <div>
            <VideoPlayer />
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center w-full -mt-8 bg-black sm:flex-row xl:pt-4">
        <div className="flex h-full w-full justify-between gap-2 bg-black px-4 sm:my-0 sm:w-[70%] sm:pr-2">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
        <div className="mt-4 flex w-full flex-col justify-start px-4 sm:-mt-16 sm:w-[35%] sm:pl-2">
          <div>
            <FeatureCardVideo />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
