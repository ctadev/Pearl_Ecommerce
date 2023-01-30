import Tab from "./Tab";
import Products from "./Products";
import { useState } from "react";

const data = [
  {
    name: "Mac",
  },
  {
    name: "iPhone",
  },
  {
    name: "Apple Watch",
  },
  {
    name: "iPad",
  },
];

const TabContainer = () => {
  const [active, setActive] = useState<number>(1);

  return (
    <main className={s.tab_container}>
      <section className={s.tabs}>
        {data.map((item, index) => (
          <Tab
            key={index}
            index={index}
            name={item.name}
            active={active}
            handleActive={setActive}
          />
        ))}
      </section>

      <section className={s.products_container}>
        <Products active={active}/>
      </section>
    </main>
  );
};

export default TabContainer;

const s = {
  tab_container: "w-full mt-8",
  tabs: "flex items-center justify-center ",
  products_container: "mt-8",
};
