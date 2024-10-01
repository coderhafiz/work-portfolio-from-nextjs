"use client";

import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Portfolios from "./components/Portfolios";
import ResumeSection from "./components/ResumeSection";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <main className="text-red-900">
        <div className="m-0 p-0 text-slate-500">
          <Nav />
          <Hero />
          <About />
          <ResumeSection />
          <Portfolios />
          <Testimonials />
          <Footer />
          {/* <Test/> */}
        </div>
      </main>
    </div>
  );
}
