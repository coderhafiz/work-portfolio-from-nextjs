const Hero = () => {
  return (
    <div className="mt-24 flex min-h-screen w-full flex-wrap items-center justify-center bg-white px-5 pb-10 sm:mt-10">
      <div className="flex flex-col gap-[clamp(1rem,3vw,12rem)] sm:flex-row">
        {/* <img src="" className="max-w-sm rounded-lg shadow-2xl" alt="Hero image" /> */}
        <div className="h-[0px] w-[0px] rounded-full bg-black sm:h-[40vw] sm:w-[40vw]"></div>
        <div className="flex flex-col place-content-center gap-5">
          <h1 className="text-center text-5xl font-bold">
            <span className="text-blue-700"> CG</span> DESIGNER <br />/<br />{" "}
            <span className="text-blue-700">WEB</span> DEVELOPER
          </h1>
          <p className="py-6 text-center text-xl font-bold sm:w-96">
            INTEGRATING 2D AND 3D DIGITAL GRAPHICS CONTENT TO THE WEB AND MOBILE
            DEVICES.
          </p>

          <button className="btn btn-primary self-center sm:w-52">
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
