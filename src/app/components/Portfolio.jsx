import ArchViz from "./ArchViz";
import GraphicsDesign from "./GraphicsDesign";
import WebDev from "./WebDev";

const Portfolio = ({ id }) => {
  const works = [
    <GraphicsDesign key="graphics-design" />,
    <WebDev key="web-dev" />,
    <ArchViz key="arch-viz" />,
  ];

  const showWorks = works[id];
  // console.log(showWorks)

  return <>{showWorks}</>;
};

export default Portfolio;
