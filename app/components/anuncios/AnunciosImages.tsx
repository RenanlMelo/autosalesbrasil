"use client";

import React, { useState } from "react";
import { simplifiedProduct } from "../../interface";
import Link from "next/link";
import Image from "next/image";


interface iAppProps {
  products: any;
  sort?: string;
  updateSort?: (newSort: string) => void;
}

export default function AnunciosImages({ products, sort, updateSort }: iAppProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString("pr-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const [loading, setLoading] = useState<string | null>(null);

  const handleImageClick = (productId: string) => {
    setLoading(productId);
  };

  const sortProducts = () => {
    if (sort === "HL") {
      return products.sort((a: any, b: any) => b.preco - a.preco );
    } else if (sort === "LH") {
      return products.sort((a: any, b: any) => a.preco - b.preco);
    } else {
      return products;
    }
  };

  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-y-10 md:grid-cols-2 xl:grid-cols-3 px-0 sm:px-10 lg:px-0 gap-x-20 lg:gap-x-10 2xl:gap-x-8 w-full">
        {sortProducts().map((product: simplifiedProduct) => (
          <div
            key={product._id}
            className="group-relative overflow-hidden shadow-anuncios rounded-lg bg-zinc-900"
          >
            <div className="aspect-[1.7/1] w-full overflow-hidden  group-hover:opacity-75">
              <Link href={`/product/${product.slug}`}>
                <div
                  onClick={() => handleImageClick(product._id)}
                  className="aspect-video overflow-hidden flex justify-center items-center w-full  group-hover:opacity-75 relative"
                >
                  {loading === product._id && (
                    <div className="bg-black/60 z-[100] w-full h-full absolute flex justify-center items-center">
                      <span className="w-16 h-16 block bg-transparent border-transparent border-2 border-t-slate-200 rounded-[50%] animate-loading"></span>
                    </div>
                  )}
                  <Image
                    src={product.imageUrl}
                    alt="Product image"
                    className="w-full h-full object-cover scale-100 hover:scale-110 duration-500 ease-in-out"
                    width={400}
                    height={350}
                  />
                </div>
              </Link>
            </div>

            <div className="mt-2 pb-2 flex justify-between flex-col 2xl:flex-row">
              <div className="px-8 pt-4 pb-0 2xl:pb-6">
                <h3 className="text-base lg:text-lg text-gray-300">{product.modelo}</h3>
                <p className="mt-1 text-sm lg:text-base text-gray-400">
                  {product.categoria}
                </p>
              </div>
              <div className="text-base lg:text-lg font-medium py-4 text-gray-300 px-8 2xl:px-8 text-left">
                {formatPrice(product.preco)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
