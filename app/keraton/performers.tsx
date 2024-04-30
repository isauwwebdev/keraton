import Image from "next/image";
import KeratonHeader from "./components/KeratonHeader";
import { Icon } from "./icons";
// import charlieBurg from "/image/charlieburg.png";

export default function Performers() {
  return (
    <div className="bg-red max-h-max pt-8">
      <div className="content-center w-5/6 lg:w-2/3 justify-center items-center mx-auto">
        <KeratonHeader title={"OUR PERFORMERS"} red={true} />
        <div className="content-center justify-center items-center mx-auto mt-10 flex gap-5">
          <div className="flex flex-col text-center item-center w-40 lg:w-96 mx-auto flex-initial">
            <Image
              src="/images/lynlapid.png"
              width={32}
              height={32}
              layout="responsive"
              alt="LYN LAPID"
            />
            <p
              className="text-3xl lg:text-8xl bg-gradient-to-r from-[#CBAA2F] to-white text-transparent 
                        bg-clip-text text-center font-bold  inline-block"
            >
              LYN LAPID
            </p>
          </div>
          <div className="text-center item-center w-40 lg:w-96 mx-auto flex-initial">
            <Image
              src="/images/emilysie.png"
              width={32}
              height={32}
              layout="responsive"
              alt="EMILY SIE"
            />
            <p
              className="text-3xl lg:text-8xl bg-gradient-to-r from-[#CBAA2F] to-white text-transparent 
                        bg-clip-text text-center font-bold  inline-block"
            >
              EMILY SIE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
