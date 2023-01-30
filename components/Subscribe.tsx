import Image from "next/image";

const Subscribe = () => {
  return (
    <main className={s.subcribe_container}>
      <section
        className={s.inner_container}
        style={{
          background:
            "url(https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className={s.newsletter}>
          <h1 className={s.h1}>Subscribe to our newsletter</h1>
          <div className={s.inputs_container}>
            <input
              type="text"
              placeholder="Your email address..."
              className={s.txtbox}
            />
            <button className={s.btn}>Subscribe</button>
          </div>
        </div>

        <div className={s.layout} />
      </section>
    </main>
  );
};

export default Subscribe;

const s = {
  subcribe_container: "bg-[#202020] py-16 -mt-1",
  inner_container:
    "m-auto max-w-[1000px] h-[300px] flex items-center justify-center relative",
  newsletter: "absolute z-30 w-[70%] flex flex-col items-center gap-8",
  h1: "text-4xl md:text-5xl font-bold text-white tracking-wide text-center",
  inputs_container:
    "border bg-white border-cyan-300 rounded-md w-full flex items-center h-[50px] md:h-[65px] pl-4 pr-1",
  txtbox: "h-full bg-transparent flex-1 outline-none pr-2",
  btn: "rounded-md bg-gradient-to-r from-pink-500 to-violet-500 h-[85%] w-[30%] md:w-[20%] text-white",
  layout: "absolute z-10 left-0 top-0 h-full w-full bg-black/20",
};
