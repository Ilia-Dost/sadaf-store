import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="block md:hidden relative mt-10">
        <div className="w-[350px] h-64 mx-auto overflow-hidden rounded-3xl">
          <Image
            src={"/img/mobil.png"}
            alt="Project"
            width={1000}
            height={1000}
            className="w-full h-64 object-cover"
          />
        </div>
      </div>

      <div className="hidden md:block lg:hidden relative mt-5">
        <Image
          src={"/img/destop.png"}
          alt="Project"
          width={900}
          height={600}
          className="rounded-3xl w-full h-[350px] object-cover"
        />
      </div>

      <div className="hidden lg:block relative mt-5">
        <Image
          src={"/img/destop.png"}
          alt="Project"
          width={1600}
          height={900}
          className="rounded-3xl w-full h-[700px] object-cover"
        />
      </div>
    </>
  );
}