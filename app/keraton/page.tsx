import FAQ from "./faq";
import Performers from "./performers";
import About from "./about";
import Vendors from "./vendors";
import Banner from "./banner";
import BroughtBy from "./broughtBy";
import Head from "next/head";

export default function KeratonContent() {
  // Your Keraton page content goes here
  return (
    <div className="bg-red">
      <Head>
        <title>Keraton 2024</title>
        <meta property="og:title" content="Keraton 2024" key="title" />
        <meta
          name="keraton"
          content="Keraton is the premier Indonesian Festival on the West Coast, and a highlight of ISAUW's annual calendar! Since its inception in 2011 at the University of Washington, Keraton has dazzled with an extraordinary lineup of performers like Jeremy Passion, Dhruv, and Charlie Burg.

          Experience the flavors of Indonesia with a variety of food trucks, and dive into traditional games that spice up the excitement. Celebrate the vibrant Indonesian culture with us, and create memories that last a lifetime. Don't miss this unforgettable cultural extravaganza!"
          key="desc"
        />
        <meta
          property="og:image"
          content="/images/KERATON_Mobile.png"
          key="ogimage"
        />
      </Head>
      <About />

      <BroughtBy />
      <Performers />
      <Banner />
      <Vendors />
      <FAQ />
    </div>
  );
}
