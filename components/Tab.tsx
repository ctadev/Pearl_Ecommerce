type Props = {
  index: number;
  name: string;
  active: number;
  handleActive: (arg:number) => void;
};

const Tab = ({ index, name, active, handleActive }: Props) => {
  return (
    <main
      className={`${s.tab_name} ${active === index && s.active_tab}`}
      onClick={() => handleActive(index)}
    >
      <div
        className={`${s.inner_div} ${
          active === index && " bg-gray-500 rounded-t-md"
        }`}
      >
        {name}
      </div>
    </main>
  );
};

export default Tab;

const s = {
  tab_name:
    "bg-gray-300 text-sm md:text-md pb-1 opacity-75 text-white cursor-pointer rounded-t-lg",
  active_tab:
    "opacity-100 bg-gradient-to-r from-pink-500 via-orange-500 to-violet-500",
  inner_div: "py-2 px-3 md:py-4 md:px-8 bg-[#1B1B1B] rounded-t-md",
};
