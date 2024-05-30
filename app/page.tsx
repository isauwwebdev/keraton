import KeratonContent from "./keraton/page";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Keraton",
  description:
    "Keraton is the premier Indonesian Festival on the West Coast, and a highlight of ISAUW's annual calendar! Since its inception in 2011 at the University of Washington, Keraton has dazzled with an extraordinary lineup of performers like Jeremy Passion, Dhruv, and Charlie Burg. Experience the flavors of Indonesia with a variety of food trucks, and dive into traditional games that spice up the excitement. Celebrate the vibrant Indonesian culture with us, and create memories that last a lifetime. Don't miss this unforgettable cultural extravaganza!",
  metadataBase: new URL("https://keraton.vercel.app/"),
};

export default function Home() {
  return <KeratonContent />;
}
