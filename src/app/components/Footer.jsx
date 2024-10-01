import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="footer grid-cols-1 bg-black px-10 py-10 text-neutral-content">
      <aside>
        <div className="flex-1 text-2xl font-extrabold">
          <Link onClick={scrollToTop} className="active:scale-95">
            <span className="text-blue-700">CG</span>mark
          </Link>
        </div>

        <p>© 2024 - All right reserved by CGmark</p>
      </aside>
      <nav className="font-bold">
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-row gap-4 sm:grid-flow-col">
          <a>
            <p>Twitter</p>
          </a>
          <a href="/">
            <p>Whatsapp</p>
          </a>
          <a>
            <p>Facebook</p>
          </a>
          <a href=" /">
            <p>Instagram</p>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
