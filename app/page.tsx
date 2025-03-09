import { KeratonContent } from "./keraton/page";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Keraton",
  description:
    "Keraton is the premier Indonesian Festival on the West Coast, and a highlight of ISAUW's annual calendar! Since its inception in 2011 at the University of Washington, Keraton has dazzled with an extraordinary lineup of performers like Jeremy Passion, Dhruv, and Charlie Burg. Experience the flavors of Indonesia with a variety of food trucks, and dive into traditional games that spice up the excitement. Celebrate the vibrant Indonesian culture with us, and create memories that last a lifetime. Don't miss this unforgettable cultural extravaganza!",
  metadataBase: new URL("https://keraton.vercel.app/"),
};

export default function Home() {
  return (
    <main className="max-h-max max-w-full mx-auto ">
      <Head>
        <title>Keraton 2024</title>
        <meta property="og:title" content="Keraton 2024" key="title" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="description"
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
    <div className="fixed top-[20px] left-[20px] z-[1000]">
      <div className="p-[5px] bg-gradient-to-r from-gold to-yellow text-white no-underline rounded-full transition-all duration-300 ease-in-out">
        <div className="pl-3 pr-3 bg-red text-orange-200 flex flex-col w-full text-center mx-auto justify-center text-xl lg:text-3xl h-full rounded-full font-semibold items-center transition-colors duration-500 ease-in-out hover:bg-red-500 hover:text-red">
          <a href="https://isauw.org" className="no-underline text-goldBright text-[15px] transition-colors duration-500 ease-linear hover:text-white">
            Back to ISAUW.org
          </a>
        </div>
      </div>
    </div>

      <KeratonContent />
    </main>
  );
}
