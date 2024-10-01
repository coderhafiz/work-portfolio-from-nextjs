import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <div id="testimonial" className="">
      <div className="my-10 flex justify-center">
        <h1 className="text-3xl font-bold sm:text-7xl">TESTIMONIALS</h1>
      </div>

      <div className="mx-5 my-5 flex flex-col flex-wrap justify-center gap-5 sm:flex-row">
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
};

export default Testimonials;
