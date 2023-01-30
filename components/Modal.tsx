import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../lib/modalSlice";
import { removeItem, addCart, decreaseCart, getTotal } from "../lib/cartSlice";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import Image from "next/image";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Modal = () => {
  const modalState = useSelector((state: any) => state.modalSlice);
  const cartState = useSelector((state: any) => state.cartSlice);
  const dispatch = useDispatch();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(cartState.cartItem);
    dispatch(getTotal());
  }, [cartState, dispatch]);

  return (
    <main
      className={`${s.modal_container} ${
        modalState ? s.modal_show : s.modal_hide
      }`}
    >
      <section
        className={s.leftside}
        onClick={() => dispatch(toggleModal())}
      ></section>
      <section className={s.rightside}>
        <div className={s.title}>
          <h1 className={s.h1_title}>Your Cart:</h1>
          <CloseIcon
            className={s.close}
            onClick={() => dispatch(toggleModal())}
          />
        </div>

        {cart.length === 0 ? (
          <div className={s.empty_container}>
            <h1 className={s.empty_h1}>Your Cart is Empty</h1>
          </div>
        ) : (
          <div className={s.cart_container}>
            {cart?.map((item: any) => (
              <div key={item.id} className={s.cart_item}>
                <Image src={item.img} alt="" height={100} width={100} />
                <div className={s.cart_quantity_container}>
                  <h1 className={s.cart_item_name}>{item.name}</h1>
                  <div className={s.cart_quantity_controls}>
                    <RemoveIcon
                      className={s.controls_icon}
                      onClick={() => dispatch(decreaseCart(item))}
                    />
                    <p className={s.controls_p}>{item.cartQuantity}</p>
                    <AddIcon
                      className={s.controls_icon}
                      onClick={() => dispatch(addCart(item))}
                    />
                  </div>
                </div>
                <div className={s.delete_container}>
                  <DeleteForeverIcon
                    className={s.delete_icon}
                    onClick={() => dispatch(removeItem(item))}
                  />
                  <p className={s.delete_p}>${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={s.total_container}>
          <div className={s.total_info_container}>
            <h1 className={s.total_h1}>
              Subtotal ( {cartState.cartTotalQuantity} )
            </h1>
            <span className={s.total_price}>${cartState.cartTotal}</span>
          </div>
          <button className={s.total_btn}>Checkout</button>
        </div>
      </section>
    </main>
  );
};

export default Modal;

const s = {
  modal_container:
    "fixed top-0 z-50 w-full h-full bg-black/80 flex transition-all",
  modal_hide: "left-[100%]",
  modal_show: "left-0",
  leftside: "flex-1",

  rightside: "w-[80%] md:max-w-[400px] lg:max-w-[500px] bg-white flex flex-col",
  title: "relative",
  h1_title: "text-center py-4 border-b border-pink-500 font-bold uppercase",
  close: "absolute right-2 top-2 cursor-pointer text-red-500 text-4xl",

  empty_container: "flex-1",
  empty_h1:
    "text-xl font-bold text-center pt-16 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent",

  cart_container: "flex-1 h-fit max-h-[80%] overflow-y-scroll p-2 pt-6",
  cart_item:
    "flex items-center gap-4 justify-between w-full py-4 px-4 border border-violet-400 rounded-lg mb-4",
  cart_quantity_container: "flex flex-col items-center",
  cart_item_name: "",
  cart_quantity_controls: "flex items-center gap-2",
  controls_icon: "text-sm cursor-pointer hover:text-red-400",
  controls_p: "",

  delete_container: "flex flex-col items-end pr-2",
  delete_icon: "cursor-pointer",
  delete_p: "text-sm text-cyan-500",

  total_container: "border-t border-pink-500 px-4 py-2",
  total_info_container: "flex items-center justify-between",
  total_h1: "text-xl font-bold",
  total_price: "font-semibold",
  total_btn: "w-full bg-pink-500 h-[50px] rounded-lg text-white mt-2",
};
