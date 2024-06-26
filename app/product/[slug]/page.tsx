import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import ImageGallery from "@/app/components/ImageGallery";
import "./product.css";
import Navbar from "@/app/components/Navbar";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
    ano,
    combustivel,
    cor,
    descricao,
    imagens,
    km,
    modelo,
    potencia,
    preco,
    "categoria": categoria->nome,
    "slug": slug.current,
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#100C12] shadow-carousel py-10">
        <div className="px-4 md:px-8 lg:mx-16 2xl:mx-32">
          <div className="grid xl:gap-8 grid-rows-[2] grid-cols-1 xl:grid-cols-5">
            {data.imagens && <ImageGallery images={data.imagens} />}

            <div className="col-span-2">
              <div className="p-12 bg-zinc-900 rounded-lg text-zinc-500 relative">
                <strong className="text-md p-2">Categoria</strong>{" "}
                <p className="text-sm p-2 pt-0 border-b border-slate-400">
                  {data.categoria}
                </p>
                <div className="grid grid-cols-2 mb-4 border-b border-slate-400 py-2">
                  <span className="text-sm sm:text-md font-normal p-3">
                    <strong className="text-md sm:text-lg">Modelo</strong>
                    <p>{data.modelo}</p>
                  </span>
                  <span className="text-sm sm:text-md font-normal p-3">
                    <strong className="text-md sm:text-lg">Ano</strong>
                    <p>{data.ano}</p>
                  </span>
                  <span className="text-sm sm:text-md font-normal p-3">
                    <strong className="text-md sm:text-lg">
                      Quilometragem
                    </strong>
                    <p>{data.km}</p>
                  </span>
                  <span className="text-sm sm:text-md font-normal p-3">
                    <strong className="text-md sm:text-lg">
                      Tipo de Combustível
                    </strong>
                    <p>{data.combustivel}</p>
                  </span>
                  <span className="text-sm sm:text-md font-normal p-3">
                    <strong className="text-md sm:text-lg">Potência</strong>
                    <p>{data.potencia}</p>
                  </span>
                  <span className="text-sm sm:text-md font-normal p-3">
                    <strong className="text-md sm:text-lg">Cor</strong>
                    <p>{data.cor}</p>
                  </span>
                </div>
                <div className="mb-4 w-full border-b border-slate-400 pb-4 pl-2">
                  <span className="text-md sm:text-lg font-bold">
                    Descrição
                  </span>
                  <p className="text-sm sm:text-md">{data.descricao}</p>
                </div>
                <p className="text-2xl p-2 text-[#25d365af]">{formatPrice(data.preco)}</p>
                <a
                  id="hover"
                  className="mt-6 bg-[#006039] w-full text-zinc-300 p-8 flex flex-col justify-center items-center duration-200  hover:text-[#25d365af] border border-transparent hover:border-[#25d365af] hover:bg-zinc-900"
                  href="https://wa.me/5515992485445"
                >
                  <p className="text-md sm:text-lg italic font-semibold">
                    Finalize sua compra pelo whatsapp
                  </p>
                  <div className="flex gap-2 mt-2">
                    <svg
                      height="27.5px"
                      width="27.5px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 308 308"
                      xmlSpace="preserve"
                    >
                      <g id="XMLID_468_">
                        <path
                          id="XMLID_469_"
                          d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458C233.168,179.508,230.845,178.393,227.904,176.981z"
                        />
                        <path
                          id="XMLID_470_"
                          d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0zM156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867C276.546,215.678,222.799,268.994,156.734,268.994z"
                        />
                      </g>
                    </svg>
                    <span className="text-lg text-center">(15) 99248-5445</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
