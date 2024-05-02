import FAQ from "./faq";
import Performers from "./performers";
import About from "./about";
import Vendors from "./vendors";
import Footer from "./footer";
import Banner from "./banner";
import BroughtBy from "./broughtBy";
import Countdown from "./countdown";
// import Accordion from "./accordion";

export const KeratonContent = () => {
  // Your Keraton page content goes here
  return (
    <div className="bg-red">
      <About />

      <BroughtBy />
      <Performers />
      <Banner />
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
