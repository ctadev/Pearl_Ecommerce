import Image from "next/image";

const Hero = () => {
  return (
    <main className={s.hero_container}>
      <section className="space-y-8">
        <h1 className={s.h1}>
          <span className={s.span}>Powered</span>
          <span className="block">By Intellect</span>
          <span className="block">Driven By Values</span>
        </h1>
        <div className={s.buy_container}>
          <button className={s.btn}>Buy Now</button>
          <p className={s.learn}>Learn More</p>
        </div>
      </section>
      <section className={s.hero_image}>
        <Image
          src="https://raw.githubusercontent.com/lukef7fywmrp/apple-redesign-yt/main/public/iphone.png"
          fill
          alt=""
          className="object-cover"
        />
      </section>
    </main>
  );
};

export default Hero;

const s = {
  hero_container:
    "sticky .stickySafari top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8",
  h1: "space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl",
  span: "block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent",
  buy_container: "flex items-center gap-8",
  btn: "bg-gradient-to-r from-violet-500 to-pink-500 px-8 py-4 text-md text-white font-bold rounded-md",
  learn: "",
  hero_image:
    "relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[650px]",
};
