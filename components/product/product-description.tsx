import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="flex grid-cols-3 flex-col-reverse items-center px-4 py-5 md:grid md:py-9">
        <div className="flex items-center pl-8">
          <div className="relative py-4 md:py-0">
            <VariantSelector options={product.options} variants={product.variants} />
          </div>

          {product.descriptionHtml && product.descriptionHtml != '<p></p>' ? (
            <Prose className="text-white" html={product.descriptionHtml} />
          ) : null}
          <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
        </div>

        <div className="flex w-full justify-between text-white md:block md:text-center">
          <div className="text-md mb-2">{product.title}</div>
          <div className="text-md text-white">
            <Price
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
          </div>
        </div>
        <Link className="hidden pr-8 text-right text-sm text-white md:block" href="/shop">
          BACK TO SHOP
        </Link>
      </div>
    </>
  );
}
