import Image from "next/image";
// import charlieBurg from "/image/charlieburg.png";

export default function Performers() {
  return (
    <div className="bg-red max-h-max pt-8">
      <div className="content-center w-5/6 justify-center items-center mx-auto">
        <div className="bg-gradient-to-r from-gold to-yellow text-white font-medium rounded-3xl p-1 h-24 align-middle justify-center content-center">
          <span className="flex w-full bg-red text-orange-200 p-1 font-sans text-center mx-auto justify-center text-2xl h-full rounded-3xl items-center">
            OUR PERFORMERS
          </span>
        </div>
        <div className="content-center justify-center items-center mx-auto mt-20">
          <Image
            src="/images/careerFair.png"
            width={200}
            height={200}
            layout="responsive"
            alt="RANDOM"
            className="justify-center items-center mx-auto responsive"
          />
          <h1 className="text-center font-sans">LYN LAPID</h1>
        </div>
      </div>
      {/* first row performers*/}

      <div className="flex flex-wrap ">
        <div className="flex content-center mx-8 mt-2">
          <div className="flex-1 mx-auto  my-auto content-center">
            <h5 className="font-sans text-white font-bold text-center mx-auto">
              WEST OF EDEN
            </h5>
          </div>
          <div className="flex-initial mx-auto my-auto">
            <h5 className="font-sans text-white font-bold text-center w-16">
              A2V
            </h5>
          </div>
          <div className="flex-1 mx-auto my-auto content-center">
            <h5 className="font-sans text-white font-bold text-center">
              VANESSA BELLA
            </h5>
          </div>
          <div className="flex-initial mx-auto my-auto content-center">
            <h5 className="font-sans text-white font-bold text-center">
              PERMIAS BAND
            </h5>
          </div>
        </div>
        {/* second row performers */}
        <div className="flex content-center mx-8 mt-8">
          <div className="flex-1 mx-auto">
            <h5 className="font-sans text-center text-white font-bold my-auto mx-auto">
              SOPHOMORES
            </h5>
          </div>
          <div className="flex-1 mx-auto">
            <h5 className="font-sans text-center text-white font-bold my-auto mx-auto">
              FAITH & JEREMY
            </h5>
          </div>
          <div className="flex-1 mx-auto">
            <h5 className="font-sans text-center text-white font-bold my-auto mx-auto">
              AUDREY YIP
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
