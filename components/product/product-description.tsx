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
      <div className="grid grid-cols-3 items-center px-4 py-9">
        <div className="flex items-center pl-8">
          <div className="relative">
            <VariantSelector options={product.options} variants={product.variants} />
          </div>

          {product.descriptionHtml && product.descriptionHtml != '<p></p>' ? (
            <Prose className="text-white" html={product.descriptionHtml} />
          ) : null}
          <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
        </div>

        <div className="text-center text-white">
          <div className="mb-2 font-medium">{product.title}</div>
          <div className="text-white">
            <Price
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
          </div>
        </div>
        <Link className="pr-8 text-right text-white" href="/shop">
          BACK TO SHOP
        </Link>
      </div>
    </>
  );
}
