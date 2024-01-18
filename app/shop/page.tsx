import { getCollectionProducts } from 'lib/shopify';
import type { Metadata } from 'next';
import Image from 'next/image';
import Logo from '../../public/demmo-logo-white.png';
export const runtime = 'edge';
export const revalidate = 43200; // 12 hours in seconds

export async function generateMetadata({
  params
}: {
  params: { page: string };
}): Promise<Metadata> {
  return {
    title: 'SHOP',
    description: 'Shop from our latest collection'
  };
}

export default async function ShopPage() {
  const products = await getCollectionProducts({ collection: 'shop' });
  // console.log(products);
  // products.map((product, i)=>{
  //     console.log( product.images);
  // });

  return (
    <>
      <div className="h-screen w-full bg-black text-white">
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
          <Image src={Logo} width={150} alt="oops" className="mx-auto mb-5" />
          <h2>COMING SOON</h2>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 gap-x-4 text-white md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, i) => {
          return (
            <div key={i} className="block h-full">
              <Link href={`/product/${product.handle}`} className="block h-full">
                <div className="">
                  <Image
                    src={product.images[0]!.url}
                    width={product.images[0]!.width}
                    height={product.images[0]!.height}
                    alt={product.images[0]!.altText}
                    className=""
                  />
                </div>
                <div className="flex justify-between p-4 text-sm">
                  <span>{product.title}</span>
                  <span>${product.priceRange.maxVariantPrice.amount}</span>
                </div>
              </Link>
            </div>
          );
        })} */}

      {/* <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        }).format(new Date(page.updatedAt))}.`}
    </p> */}
      {/* </div> */}
    </>
  );
}
