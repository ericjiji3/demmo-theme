import { getCollectionProducts } from 'lib/shopify';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
export const runtime = 'edge';
export const revalidate = 43200; // 12 hours in seconds



export async function generateMetadata({
    params
  }: {
    params: { page: string };
  }): Promise<Metadata> {
    return {
      title: 'SHOP',
      description: 'Shop from our latest collection',
    };
}

export default async function ShopPage() {
    const products = await getCollectionProducts({collection: 'shop'});
    console.log(products);
    products.map((product, i)=>{
        console.log( product.images);
    });

return (
    <>
    <div className="grid grid-cols-4 gap-x-4 text-white">

    {products.map((product, i)=>{
        return(
            <div key={i}>
                <div>
                    <Image
                        src={product.images[0]!.url}
                        width={product.images[0]!.width}
                        height={product.images[0]!.height}
                        alt={product.images[0]!.altText}
                    />
                </div>
                <div className="flex justify-between p-4">
                    <span>{product.title}</span>
                    <span>${product.priceRange.maxVariantPrice.amount}</span>
                    <Link href={`/product/${product.handle}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21.3" height="21.302" viewBox="0 0 21.3 21.302">
                            <path id="sync" d="M19.985,21.3H12a1.3,1.3,0,0,1-.936-.385,1.27,1.27,0,0,1-.4-.947V13.314a1.27,1.27,0,0,1,.4-.947A1.3,1.3,0,0,1,12,11.982H15.99a1.349,1.349,0,0,1,1.342-1.331,1.256,1.256,0,0,1,.936.4,1.3,1.3,0,0,1,.385.936h1.332a1.27,1.27,0,0,1,.947.4,1.3,1.3,0,0,1,.385.936V19.97A1.315,1.315,0,0,1,19.984,21.3Zm-1.332-5.991a.676.676,0,0,0-.666-.666H13.993a.676.676,0,0,0-.666.666v2.663a.676.676,0,0,0,.666.666h3.994a.676.676,0,0,0,.666-.666ZM17.332,9.32a1.308,1.308,0,0,1-.947-.385,1.258,1.258,0,0,1-.4-.936,1.349,1.349,0,0,1,1.342-1.342,1.259,1.259,0,0,1,.936.4A1.31,1.31,0,0,1,18.653,8a1.268,1.268,0,0,1-.385.936A1.281,1.281,0,0,1,17.332,9.32Zm0-3.994a1.308,1.308,0,0,1-.947-.385,1.27,1.27,0,0,1-.4-.947,1.27,1.27,0,0,1,.4-.947,1.308,1.308,0,0,1,.947-.385,1.273,1.273,0,0,1,.936.385,1.29,1.29,0,0,1,.385.947,1.315,1.315,0,0,1-1.321,1.332Zm-3.994,0a1.308,1.308,0,0,1-.947-.385,1.27,1.27,0,0,1-.4-.947,1.27,1.27,0,0,1,.4-.947,1.308,1.308,0,0,1,.947-.385,1.273,1.273,0,0,1,.936.385,1.29,1.29,0,0,1,.385.947,1.315,1.315,0,0,1-1.321,1.332Zm-4,3.994H5.34a1.315,1.315,0,0,1-1.321,1.332,1.31,1.31,0,0,1-.947-.385,1.267,1.267,0,0,1-.4-.947H1.346A1.3,1.3,0,0,1,.41,8.935a1.27,1.27,0,0,1-.4-.947V1.332A1.27,1.27,0,0,1,.41.385,1.3,1.3,0,0,1,1.346,0H9.334a1.287,1.287,0,0,1,.947.385,1.287,1.287,0,0,1,.385.947V7.988A1.315,1.315,0,0,1,9.334,9.32ZM8,3.329a.676.676,0,0,0-.666-.666H3.343a.676.676,0,0,0-.666.666V5.992a.676.676,0,0,0,.666.666H7.336A.676.676,0,0,0,8,5.992V3.329ZM4,11.983a1.308,1.308,0,0,1,.947.385,1.258,1.258,0,0,1,.4.936,1.292,1.292,0,0,1-.4.947,1.306,1.306,0,0,1-1.872,0,1.29,1.29,0,0,1-.4-.947A1.315,1.315,0,0,1,4,11.983Zm0,3.994a1.308,1.308,0,0,1,.947.385,1.331,1.331,0,0,1,0,1.893,1.33,1.33,0,0,1-1.872,0,1.27,1.27,0,0,1-.4-.947A1.315,1.315,0,0,1,4,15.977Zm4,0a1.332,1.332,0,1,1,.011,2.663,1.31,1.31,0,0,1-.947-.385,1.267,1.267,0,0,1-.4-.947A1.315,1.315,0,0,1,8,15.977Z" transform="translate(-0.015)" fill="#fff"/>
                        </svg>
                    </Link>
                </div>
            </div>
        )
    })};

    {/* <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        }).format(new Date(page.updatedAt))}.`}
    </p> */}
            
    </div>
    </>
);
}