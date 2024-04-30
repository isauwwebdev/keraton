import classNames from "classnames";

type Props = {
  itemsLength: number;
  selectedIndex: number;
};
export default function Dots({ itemsLength, selectedIndex }: Props) {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex gap-1 my-2 justify-center items-center -translate-y-5 lg:-translate-y-10">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={classNames({
              "rounded-full transition-all duration-300 bg-white": true,
              // tune down the opacity if slide is not selected
              "h-2 w-2 lg:h-4 lg:w-4 ": selected,
              "opacity-50": !selected,
              "h-1 w-1 lg:h-2 lg:w-2": !selected,
            })}
            key={index}
          ></div>
        );
      })}
    </div>
  );
}
