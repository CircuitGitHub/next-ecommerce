"use client"

import Slider from "@/components/Slider"
import ProductList from '../components/ProductList';
import CategoryList from "@/components/CategoryList";
import ListPage from '../components/ListPage';
import { useContext, useEffect, Suspense } from "react";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";

const HomePage = () => {

  /*const wixClient = useWixClient()

  useEffect(() => {
    async function getProducts() {
      const res = await wixClient.products.queryProducts().find();
    }
  }, [wixClient])*/

  /*const wixClient = await wixClientServer()

  const res = await wixClient.products.queryProducts().find();*/





  return (
    <div className=''>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"loading"}>
          <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID} limit={4} />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList />
      </div>

      <ListPage />
    </div>
  )
}

export default HomePage