import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <main className={s.footer_container}>
      <div className={s.inner_container}>
        <section className={s.brand}>
          <h1 className={s.brand_h1}>PEARL</h1>
          <div className={s.brand_info}>
            <p>Powered by Intellect</p>
            <p>Driven by Values</p>
          </div>
          <ol className={s.brand_socials_ol}>
            <li className={s.brand_socials_li}>
              <TwitterIcon style={{ fontSize: "2rem" }} />
            </li>
            <li className={s.brand_socials_li}>
              <InstagramIcon style={{ fontSize: "2rem" }} />
            </li>
            <li className={s.brand_socials_li}>
              <LinkedInIcon style={{ fontSize: "2rem" }} />
            </li>
            <li className={s.brand_socials_li}>
              <FacebookIcon style={{ fontSize: "2rem" }} />
            </li>
          </ol>
        </section>

        <section className={s.title_container}>
          <h1 className={s.title_h1}>Product & Service</h1>
          <ol className={s.title_ol}>
            <li className={s.title_li}>Smartphones</li>
            <li className={s.title_li}>Tablets</li>
            <li className={s.title_li}>Audio Sound</li>
            <li className={s.title_li}>Watches</li>
            <li className={s.title_li}>Smart Switch</li>
            <li className={s.title_li}>Tvs</li>
            <li className={s.title_li}>Sound Devices</li>
          </ol>
        </section>

        <section className={s.title_container}>
          <h1 className={s.title_h1}>Shop</h1>
          <ol className={s.title_ol}>
            <li className={s.title_li}>Offers</li>
            <li className={s.title_li}>Pearl Store</li>
            <li className={s.title_li}>Where to Buy</li>
            <li className={s.title_li}>Online Shop</li>
          </ol>
        </section>

        <section className={s.title_container}>
          <h1 className={s.title_h1}>Support</h1>
          <ol className={s.title_ol}>
            <li className={s.title_li}>Email Support</li>
            <li className={s.title_li}>WhatsApp</li>
            <li className={s.title_li}>Live Chat</li>
            <li className={s.title_li}>Phone Support</li>
            <li className={s.title_li}>Community</li>
            <li className={s.title_li}>Members</li>
            <li className={s.title_li}>Service Location</li>
          </ol>
        </section>
      </div>
    </main>
  );
};

export default Footer;

const s = {
  footer_container: "px-4 py-12 bg-[#1B1B1B] text-white",
  inner_container: "flex gap-8 mx-auto max-w-[1200px]",
  brand: "flex flex-col gap-6 items-center w-full lg:items-start",
  brand_h1:
    "text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent",
  brand_info: "text-xl text-semibold",
  brand_socials_ol: "flex gap-4",
  brand_socials_li:
    "bg-gray-600 rounded-full h-[70px] w-[70px] flex items-center justify-center cursor-pointer",

  title_container: "hidden lg:flex flex-col gap-4 px-4 xl:px-10",
  title_h1: "text-3xl font-semibold whitespace-nowrap border-b-2 rounded-b-md",
  title_ol: "",
  title_li: "my-2 cursor-pointer opacity-70 transition-all hover:opacity-100",
};
