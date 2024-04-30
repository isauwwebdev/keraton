import FAQ from "./faq";
import Performers from "./performers";
import About from "./about";
import Vendors from "./vendors";
import Footer from "./footer";
import Banner from "./banner";

export const KeratonContent = () => {
  return (
    <div className="max-h-max max-w-full mx-auto">
      <About />
      <Banner />
      <Performers />
      <Vendors />
      <FAQ />
      <Footer />
    </div>
  );
};

// If you also need the default export to be a page by itself
const Page = () => <KeratonContent />;
export default KeratonContent;
