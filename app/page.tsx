import { KeratonContent } from "./keraton/page";
import Head from "next/head";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keraton",
  description:
    "Keraton is the premier Indonesian Festival on the West Coast, and a highlight of ISAUW's annual calendar! Since its inception in 2011 at the University of Washington, Keraton has dazzled with an extraordinary lineup of performers like Jeremy Passion, Dhruv, and Charlie Burg. Experience the flavors of Indonesia with a variety of food trucks, and dive into traditional games that spice up the excitement. Celebrate the vibrant Indonesian culture with us, and create memories that last a lifetime. Don't miss this unforgettable cultural extravaganza!",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
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
      <KeratonContent />
    </main>
  );
}
