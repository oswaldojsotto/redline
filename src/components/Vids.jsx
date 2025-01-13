import VidShape1 from './VidShape1';
import VidShape2 from './VidShape2';

const Vids = () => {
  return (
    <div className="h-[100%] w-full bg-black pb-[5rem] pt-[18rem] xs:pt-[25rem] sm:pt-[10rem] lg:pt-[15rem] xl:pt-[18rem]">
      <div className="flex w-full max-w-[100%] flex-col gap-4 px-4">
        <VidShape1 />
        <VidShape2 />
      </div>
    </div>
  );
};

export default Vids;
