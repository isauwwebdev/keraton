import FAQ from "./faq";
import Performers from "./performers";
import About from "./about";
import Vendors from "./vendors";
import Footer from "./footer";
import BroughtBy from "./broughtBy";

export const KeratonContent = () => {
  // Your Keraton page content goes here
  return (
    <div className="max-h-max max-w-full mx-auto">
      <About />
      <BroughtBy />
      <Performers />
      {/* <Accordion /> */}
      <Vendors />
      <FAQ />
      <Footer />
    </div>
  );
};

// If you also need the default export to be a page by itself
const Page = () => <KeratonContent />;
export default KeratonContent;
