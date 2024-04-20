import classNames from "classnames";
import Image from "next/image";

type Props = {
  right: boolean;
  imgs: string[];
  selectedIndex: number;
};
const VendorImage = ({ right, imgs, selectedIndex }: Props) => {
  return (
    <div
      className={
        "absolute z-20 top-0 -mt-10 " +
        (right ? "left-0 -ml-40" : "right-0 -mr-40")
      }
    >
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
