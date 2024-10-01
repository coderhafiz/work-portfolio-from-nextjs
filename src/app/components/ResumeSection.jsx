import Resume from "./Resume";

const ResumeSection = () => {
  return (
    <div className="mb-28">
      <div
        id="resume"
        className="my-10 flex justify-center text-5xl font-bold sm:text-7xl"
      >
        <h1>RESUME</h1>
      </div>

      <div className="flex w-full flex-col sm:px-10">
        <div className="my-10 flex w-full flex-col items-center gap-5 sm:flex-row">
          <div className="card w-72 justify-center bg-base-100 shadow-xl sm:w-96">
            {/* <figure className="px-10 pt-10">
                          <img loading="lazy" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                      </figure> */}
            <div className="card-body items-center text-center">
              <h2 className="text-xl font-bold text-blue-700">Education</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                perferendis deleniti nam unde molestias nihil enim
                necessitatibus est, id odit corporis culpa excepturi iusto minus
                ex impedit voluptates odio quasi?{" "}
              </p>
            </div>
          </div>

          <div className="card w-72 justify-center bg-base-100 shadow-xl sm:w-96">
            {/* <figure className="px-10 pt-10">
                          <img loading="lazy" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                      </figure> */}
            <div className="card-body items-center text-center">
              <h2 className="text-xl font-bold text-blue-700">Education</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                perferendis deleniti nam unde molestias nihil enim
                necessitatibus est, id odit corporis culpa excepturi iusto minus
                ex impedit voluptates odio quasi?{" "}
              </p>
            </div>
          </div>

          <div className="card w-72 justify-center bg-base-100 shadow-xl sm:w-96">
            {/* <figure className="px-10 pt-10">
                          <img loading="lazy" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                      </figure> */}
            <div className="card-body items-center text-center">
              <h2 className="text-xl font-bold text-blue-700">Education</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                perferendis deleniti nam unde molestias nihil enim
                necessitatibus est, id odit corporis culpa excepturi iusto minus
                ex impedit voluptates odio quasi?{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="my-10 flex w-full flex-col items-center gap-5 rounded-md border-2 border-black sm:flex-row sm:gap-10">
          <div className="card w-72 justify-center shadow-xl sm:w-[42rem]">
            {/* <figure className="px-10 pt-10">
                        <img loading="lazy" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure> */}
            <div className="card-body items-center text-center">
              <h2 className="text-xl font-bold text-blue-700">Experience</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                perferendis deleniti nam unde molestias nihil enim
                necessitatibus est, id odit corporis culpa excepturi iusto minus
                ex impedit voluptates odio quasi?{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5 p-5 leading-[5rem]">
            <div className="flex justify-center">
              <h1 className="text-3xl font-extrabold">
                NEXT<span className="text-blue-700">JS /</span>
              </h1>
            </div>

            <div className="flex justify-center">
              {/* <img loading="lazy" src="g4.svg" alt="" /> */}
              <h1 className="text-3xl font-extrabold">
                REACT<span className="text-blue-700">JS /</span>
              </h1>
            </div>

            <div className="flex justify-center">
              {/* <img loading="lazy" src="javascript-programming-language-icon.svg" alt="" /> */}
              <h1 className="text-3xl font-extrabold">
                JAVA<span className="text-blue-700">SCRIPT /</span>
              </h1>
            </div>

            <div className="flex justify-center">
              {/* <img loading="lazy" src="html-icon.svg" alt="" /> */}
              <h1 className="text-3xl font-extrabold text-blue-700">HTML /</h1>
            </div>

            <div className="flex justify-center">
              {/* <img loading="lazy" src="4202020_css3_html_logo_social_social media_icon.svg" alt="" /> */}
              <h1 className="text-3xl font-extrabold text-blue-700">CSS /</h1>
            </div>

            <div className="flex justify-center">
              {/* <img loading="lazy" src="tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="" /> */}
              <h1 className="text-3xl font-extrabold">
                TAILWIND<span className="text-blue-700">CSS /</span>
              </h1>
            </div>

            <div className="flex justify-center">
              {/* <svg loading="lazy" xmlns="http://www.w3.org/2000/svg" width="140" height="140"><path d="M 44.65 33.992 L 95.35 33.992 L 95.35 59.341 L 70 59.341 Z M 44.65 59.341 L 70 59.341 L 95.35 84.691 L 44.65 84.691 Z M 44.65 84.691 L 70 84.691 L 70 110.041 Z" fill="rgb(0, 0, 0)"></path></svg> */}
              <h1 className="text-3xl font-extrabold">
                FRAMER<span className="text-blue-700">MOTION /</span>
              </h1>
            </div>

            <div className="flex justify-center">
              {/* <img loading="lazy" src="three-js-icon.svg" alt="" /> */}
              <h1 className="text-3xl font-extrabold">
                THREE<span className="text-blue-700">JS /</span>
              </h1>
            </div>

            <div className="flex justify-center">
              {/* <img loading="lazy" src="blender_icon_64x64.png" alt="" /> */}
              <h1 className="text-3xl font-extrabold">
                BLENDER<span className="text-blue-700">3D /</span>
              </h1>
            </div>

            <div className="flex justify-center">
              {/* <img loading="lazy" src="Inkscape-Logo.wine.svg" alt="" /> */}
              <h1 className="text-3xl font-extrabold text-blue-700">
                INKSCAPE /
              </h1>
            </div>

            <div className="flex justify-center">
              {/* <img loading="lazy" src="GIMP-Logo.wine.svg" alt="" /> */}
              <h1 className="text-3xl font-extrabold text-blue-700">GIMP</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
