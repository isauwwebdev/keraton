"use client";
import Vendors from "./vendors";

export const VendorPage = () => {
  // Your Keraton page content goes here
  return (
    <main className="flex min-h-screen ">
      <Vendors />
    </main>
  );
};

// If you also need the default export to be a page by itself
const Page = () => <VendorPage />;
export default VendorPage;
