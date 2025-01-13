import { useState } from "react";

const UserButton = () => {
  const [hoverUser, setHoverUser] = useState(false);
  const [hoverPre, setHoverPre] = useState(false);

  return (
    <div className="flex h-10 -gap-6 z-100">
      <div className="absolute flex ml-8 -mt-1 gap-11">
        <img
          className="scale-[0.8]"
          src="/images/usericon.svg"
        ></img>
        <h1 className="mt-4 font-porscha text-[13px] text-primary">
          pre-order
        </h1>
      </div>
      <div className="flex">
        <img
          className=""
          src="/images/rectangle5.svg"
        ></img>
        <img
          className="-ml-6"
          src="/images/rectangle4.svg"
        ></img>
      </div>
    </div>
  );
};

export default UserButton;
