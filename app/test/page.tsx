"use client";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const VendorPage = () => {
  // Your Keraton page content goes here
  return (
    <section>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

// If you also need the default export to be a page by itself
const Page = () => <VendorPage />;
export default VendorPage;
