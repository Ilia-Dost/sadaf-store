import Image from "next/image";
import Header from "@/components/layout/Header/Header";
import Main from "@/components/home/Home";
import Footer from "@/components/layout/Footer/Footer";
export default function Home() {
  return (
    <div className="">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
