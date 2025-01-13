const Testimonies = () => {
  return (
    <div className="flex">
      <div className="flex w-fit scale-[0.7] rounded-full">
        <img
          className="z-0"
          src={`/images/avatar1.svg`}
        ></img>
        <img
          className="z-[1] -mx-2"
          src={`/images/avatar2.svg`}
        ></img>
        <img
          className="z-[2]"
          src={`/images/avatar3.svg`}
        ></img>
      </div>
      <div className="">
        <h1 className="font-tektur my-2 max-w-[20rem] text-[12px] leading-4 text-[#C55E5E]">
          These people have tested the prototype and are
          satisfied with the innovation.
        </h1>
      </div>
    </div>
  );
};

export default Testimonies;
