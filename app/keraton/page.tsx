import FAQ from "./faq";
import Performers from "./performers";
import About from "./about";

export const KeratonContent = () => {
  // Your Keraton page content goes here
  return (
    <div className="div max-h-max">
      <About />
      <Performers />
      <FAQ />
    </div>
  );
};

// If you also need the default export to be a page by itself
const Page = () => <KeratonContent />;
export default KeratonContent;
