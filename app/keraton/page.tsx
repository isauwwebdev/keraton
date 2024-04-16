import FAQ from "./faq";
import Performers from "./performers";
import About from "./about";
// import Vendors from "./vendors";
import Footer from "./footer";
// import Accordion from "./accordion";

export const KeratonContent = () => {
  // Your Keraton page content goes here
  return (
    <div className="div max-h-max">
      <About />
      <Performers />
      <FAQ />
      {/* <Accordion /> */}

      <Footer />
    </div>
  );
};

// If you also need the default export to be a page by itself
const Page = () => <KeratonContent />;
export default KeratonContent;
