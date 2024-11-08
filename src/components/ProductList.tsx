import Link from "next/link"
import Image from "next/image"
import { wixClientServer } from "@/lib/wixClientServer";

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({ categoryId, limit }: { categoryId: string; limit?: number }) => {

  const wixClient = await wixClientServer
  const res = await wixClient.products.queryProducts().eq("collectionIds", categoryId).limit(limit || PRODUCT_PER_PAGE).find()




  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap' >
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image src="https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
          <Image src="https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill sizes="25vw"
            className="absolute object-cover rounded-md" />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-mainTheme text-mainTheme w-max py-2 px-4 text-sm hover:bg-mainTheme hover:text-white ">Add to Cart</button>
      </Link>
    </div>
  )
}

export default ProductList