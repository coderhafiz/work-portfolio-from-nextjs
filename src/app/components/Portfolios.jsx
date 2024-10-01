import { useState } from "react";
import Portfolio from "./Portfolio";

const Portfolios = () => {
  const [id, setId] = useState(0);

  const handleClick = (e) => {
    // e.preventDefault();
    const tabId = e.target.id;
    setId(tabId);
  };

  return (
    <div id="portfolio" className="w-full">
      <div className="flex justify-center">
        <h1 className="mt-10 text-5xl font-bold sm:text-7xl">PORTFOLIO</h1>
      </div>

      <div className="my-20 flex w-full flex-row place-content-center px-1 text-center sm:px-10">
        <input
          type="radio"
          name="nav"
          id="graphicsDesign"
          className="peer/graphicsDesign hidden"
          defaultChecked
        />
        <input
          type="radio"
          name="nav"
          id="webDev"
          className="peer/webDev hidden"
        />
        <input
          type="radio"
          name="nav"
          id="archViz"
          className="peer/archViz hidden"
        />
        <label
          id="0"
          htmlFor="graphicsDesign"
          className="w-full cursor-pointer border-x-0 border-b-2 border-t-0 border-slate-300 peer-checked/graphicsDesign:border-b-2 peer-checked/graphicsDesign:border-black peer-checked/graphicsDesign:font-bold"
          onClick={handleClick}
        >
          GRAPHIC DESIGN
        </label>
        <label
          id="1"
          htmlFor="webDev"
          className="w-full cursor-pointer border-x-0 border-b-2 border-t-0 border-slate-300 peer-checked/webDev:border-b-2 peer-checked/webDev:border-black peer-checked/webDev:font-bold"
          onClick={handleClick}
        >
          WEB DEV
        </label>
        <label
          id="2"
          htmlFor="archViz"
          className="w-full cursor-pointer border-x-0 border-b-2 border-t-0 border-slate-300 peer-checked/archViz:border-b-2 peer-checked/archViz:border-black peer-checked/archViz:font-bold"
          onClick={handleClick}
        >
          ARCH VIZ
        </label>
      </div>

      <Portfolio id={id} />
    </div>
  );
};

export default Portfolios;
