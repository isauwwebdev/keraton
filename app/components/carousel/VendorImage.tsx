import classNames from "classnames";
import Image from "next/image";

type Props = {
  imgs: string[];
  selectedIndex: number;
};
const VendorImage = ({ imgs, selectedIndex }: Props) => {
  return (
    <div className="absolute top-0 left-0 -mt-10 -ml-40 z-20">
      <Image
        src={imgs[selectedIndex]}
        alt="Landing Image"
        width={200}
        height={200}
      />
    </div>
  );
};
export default VendorImage;
