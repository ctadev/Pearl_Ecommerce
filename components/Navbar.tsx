import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../lib/cartSlice";
import { toggleModal } from "../lib/modalSlice";
import { useEffect } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state: any) => state.cartSlice);

  useEffect(() => {
    dispatch(getTotal());
  }, [cartState, dispatch]);

  return (
    <main className={s.nav_container}>
      <section className={s.logo_container}>
        <Link href="/">
          <div className={s.image_container}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png"
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
        </Link>
      </section>

      <section className={s.nav_links_container}>
        <Link className={s.nav_links} href="/">
          Product
        </Link>
        <Link className={s.nav_links} href="/">
          Explore
        </Link>
        <Link className={s.nav_links} href="/">
          Support
        </Link>
        <Link className={s.nav_links} href="/">
          Business
        </Link>
      </section>

      <section className={s.icons_container}>
        <SearchIcon className={s.icon} />
        <div
          className={s.basket_container}
          onClick={() => dispatch(toggleModal())}
        >
          <ShoppingBasketOutlinedIcon
            className={`${s.basket_icon} ${s.icon}`}
          />
          <p className={s.p}>{cartState.cartTotalQuantity}</p>
        </div>
        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          className={s.icon}
        />
      </section>
    </main>
  );
};

export default Navbar;

const s = {
  nav_container:
    "sticky top-0 left-0 z-50 flex w-full items-center justify-between bg-[#E7ECEE] p-4",
  logo_container: "flex items-center justify-center md:w-1/5",
  image_container:
    "relative h-[30px] w-[30px] cursor-pointer opacity-75 transition-all hover:opacity-100",
  nav_links_container:
    "hidden flex-1 items-center justify-center space-x-8 md:flex",
  nav_links:
    "cursor-pointer relative font-semibold after:absolute after:bg-black after:h-1 after:inset-x-0 after:scale-x-0 after:top-6 after:transform after:origin-center after:transition-all after:duration-300 hover:after:scale-x-100",
  icons_container: "flex items-center justify-center gap-4 md:w-1/5",
  icon: "cursor-pointer",
  basket_container: "relative",
  basket_icon: "",
  p: "absolute -right-3 -top-1 text-sm z-50 h-5 w-6 flex items-center justify-center bg-gradient-to-r from-pink-500 to-violet-500 rounded-full",
};
