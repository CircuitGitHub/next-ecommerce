"use client"

import Image from "next/image"
import { useState } from "react"

const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/2258083/pexels-photo-2258083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/2495555/pexels-photo-2495555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]


const ProductImages = () => {

    const [index, setIndex] = useState(0)

    return (
        <div className=''>
            <div className="h-[500px] relative">
                <Image
                    src={images[index].url}
                    alt=""
                    fill
                    className="object-cover rounded-md"
                    sizes="50vw"
                />
            </div>

            <div className="flex justify-between gap-4 mt-8">
                {images.map((img, i) => (
                    <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={() => setIndex(i)}>
                        <Image
                            src={img.url}
                            alt=""
                            fill
                            className="object-cover rounded-md"
                            sizes="50vw"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImages