import Image from "next/image";
// import charlieBurg from "/image/charlieburg.png";

export default function Performers() {
  return (
    <div className="bg-red max-h-max">
      <div className="content-center text-center justify-center items-center mx-auto">
        <div className="rounded-lg content-center text-yellow text-center border-4 p-2 w-64">
          OUR PERFORMERS
        </div>
        {/* <Image
        src="charlieBurg"
        alt="Picture of charlie burg"
        width={100}
        height={100}
      /> */}
        <h1 className="text-center text-lg font-sans text-yellow m-12">
          Charlie Burg
        </h1>

        <p className="text-center font-sans text-yellow m-12">
          Audrey, 5th Harmony
        </p>
      </div>
    </div>
  );
}
