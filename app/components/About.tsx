import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="w-full">
        <section className="mx-auto max-w-8xl mb-12 lg:mb-32">
          <div className="mb-4 w-full h-full flex px-0 md:px-16 xl:px-32 2xl:px-60 mt-16 md:mt-32 justify-start items-center">
            <h1 className="mx-10 px-2 border-b-2 lg:border-b-4 text-left border-[#1864c7] font-light text-[#8e8e8e] sm:text-lg lg:text-2xl 2xl:text-4xl md:mb-8 tracking-normal xl:tracking-tight">
              Não vendemos apenas carros, <br />
              Entregamos seu <strong className="font-bold">sonho</strong> sobre quatro rodas.
            </h1>
          </div>
          <div className="flex justify-center items-center sm:items-stretch flex-col lg:flex-row px-0 2xl:mx-60 bg-transparent shadow-about">
            <div className="w-full lg:bg-transparent lg:w-1/2 flex justify-center lg:justify-end border-none xl:border-l border-zinc-700 relative">
              <Image
                src="/logo.png"
                alt="logo"
                width={1000}
                height={1000}
                className="w-1/2 md:w-2/3 mx-6 md:mx-0 lg:w-full aspect-square object-cover"
              ></Image>
            </div>
            <div className="w-full flex flex-col justify-center items-start border-none xl:border-r border-zinc-700 text-[#8e8e8e] text-base 2xl:text-lg">
              <p className=" font-light m-12 mt-0 md:m-12 pb-6 mb-0 indent-10 leading-7 text-">
                A <span className="font-semibold">Auto Sales Brasil</span> é o
                resultado da paixão de dois sócios pelo universo automotivo. Com
                o intuito de auxiliar nossos clientes, cuidamos da{" "}
                <span className="font-semibold ]">
                  compra e venda do seu veículo
                </span>
                , descomplicando todo o processo deste momento, minimizando
                dores de cabeça e burocracias.
              </p>
              <p className="font-light mx-12 pb-6 indent-10 leading-7 text-justify">
                Assim, proporcionamos à você: Economia de tempo, uma experiência
                personalizada e singular, com uma relação de transparência e
                confiança. Convidamos você a vivenciar a diferença oferecida
                pela Auto Sales Brasil. <br />
              </p>
              <p className="font-light px-12 pt-4 mb-8 leading-7 text-center mx-auto">
                Entre em
                <span> </span>
                <a
                  href="#footer"
                  className="font-semibold underline hover:text-[#1864c7]"
                >
                  contato
                </a>{" "}
                <span> </span>
                conosco e experimente uma abordagem única.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
