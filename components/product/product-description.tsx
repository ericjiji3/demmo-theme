import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  console.log(product.descriptionHtml);
  return (
    <>
    <div className='grid grid-cols-3 px-4 py-9'>
    <div className='pl-8 flex'>
    <VariantSelector options={product.options} variants={product.variants} />
    {product.descriptionHtml ? (
        <Prose
          className="text-white"
          html={product.descriptionHtml}
        />
      ) : null}
    <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
    </div>
    
      <div className="text-white text-center">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div> 
      <Link className="text-white pr-8 text-right" href="/shop">BACK TO SHOP</Link>
      

      

      
      </div>
    </>
  );
}
