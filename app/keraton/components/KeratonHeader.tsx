type Props = {
  title: string;
  red: boolean;
};

export default function KeratonHeader({ title, red }: Props) {
  return (
    <div className="flex flex-col">
      <div
        className={
          (red
            ? "bg-gradient-to-r from-gold to-yellow"
            : "bg-gradient-to-r from-red to-goldBright") +
          " text-white font-medium p-1 align-middle justify-center content-center aspect-18/1 items-center rounded-full shadow-lg"
        }
      >
        <div
          className={
            (red ? "bg-red text-orange-200" : "bg-yellow text-red") +
            " flex flex-col w-full p-1 text-center mx-auto justify-center text-xl lg:text-3xl h-full rounded-full font-semibold items-center"
          }
        >
          {title}
        </div>
      </div>
    </div>
  );
}
