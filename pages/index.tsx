import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import TabContainer from "../components/TabContainer";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const modalState = useSelector((state: any) => state.modalSlice);

  useEffect(() => {
    if (modalState) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  });

  return (
    <>
      <Head>
        <title>Pearl Store</title>
        <meta name="description" content="Pearl Store created by Cong Ta" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`relative`}>
        <ToastContainer />
        <Navbar />
        <section className="bg-[#E7ECEE] relative h-[200vh]">
          <Hero />
        </section>

        <section className={s.paralax}>
          <h1 className={s.h1}>New Promos</h1>
          <TabContainer />
        </section>
        <Subscribe />
        <Footer />
        <Modal />
      </main>
    </>
  );
}

const s = {
  paralax: "relative z-40 -mt-[100vh] bg-[#1B1B1B] min-h-[100vh] p-4 pb-24",
  h1: "text-center text-4xl font-medium tracking-wide text-white md:text-5xl mt-8",
};
