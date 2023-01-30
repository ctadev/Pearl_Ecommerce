import Image from "next/image";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState, useEffect } from "react";
import data from "../data";
import { useDispatch } from "react-redux";
import { addCart } from "../lib/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  active: number;
};

const Products = ({ active }: Props) => {
  const [products, setProducts] = useState<any>([]);
  const dispatch = useDispatch();

  const AddToCart = (item: any) => {
    dispatch(addCart(item));
    toast("🦄 Item Added to Cart!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    switch (active) {
      case 0:
        setProducts(data[0].mac);
        break;
      case 1:
        setProducts(data[0].phone);
        break;
      case 2:
        setProducts(data[0].watch);
        break;
      case 3:
        setProducts(data[0].ipad);
        break;
    }
  }, [active]);

  return (
    <main className={s.products_container}>
      {products.map((item: any) => (
        <section key={item.id} className={s.products_card}>
          <h1 className="md:text-2xl font-semibold">{item.name}</h1>
          <div className={s.image_container}>
            <Image
              src={item.img}
              alt={item.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={s.p_container}>
            <p>${item.price}</p>
            <p className={s.p_shopping_cart} onClick={() => AddToCart(item)}>
              <ShoppingCartOutlinedIcon style={{ fontSize: "1.3rem" }} />
            </p>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Products;

const s = {
  products_container:
    "grid grid-cols-2 md:grid-cols-3 mx-auto max-w-[1000px] gap-8",
  products_card:
    "text-white bg-gray-700 h-[300px] md:h-[400px] flex flex-col items-center py-4 px-2 rounded-lg",
  image_container: "relative h-[70%] w-[100%] mt-4",
  p_container: "flex items-center justify-between w-full px-4 mt-4",
  p_shopping_cart:
    "cursor-pointer bg-gradient-to-r from-pink-500 to-violet-500 rounded-full py-1 px-[0.3rem]",
};
