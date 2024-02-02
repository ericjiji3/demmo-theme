'use client';

import clsx from 'clsx';
import { ProductOption, ProductVariant } from 'lib/shopify/types';
import { createUrl } from 'lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean; // ie. { color: 'Red', size: 'Large', ... }
};

export function VariantSelector({
  options,
  variants
}: {
  options: ProductOption[];
  variants: ProductVariant[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasNoOptionsOrJustOneOption =
    !options.length || (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    // Adds key / value pairs for each variant (ie. "color": "Black" and "size": 'M").
    ...variant.selectedOptions.reduce(
      (accumulator, option) => ({ ...accumulator, [option.name.toLowerCase()]: option.value }),
      {}
    )
  }));

  const [toggle, setToggle] = useState(false);
  const [label, setLabel] = useState('Size');
  useEffect(() => {
    options.map((option) => {
      setLabel(option.name);
    });
  }, []);

  const showSizes = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return options.map((option) => (
    <dl className="relative" key={option.id}>
      <dd
        className={
          toggle
            ? 'absolute bottom-[37px] left-0 flex w-full flex-col flex-col-reverse flex-wrap gap-3 border border-b-0 border-white bg-black py-2 text-white'
            : 'hidden'
        }
      >
        {option.values.map((value) => {
          const optionNameLowerCase = option.name.toLowerCase();

          // Base option params on current params so we can preserve any other param state in the url.
          const optionSearchParams = new URLSearchParams(searchParams.toString());

          // Update the option params using the current option to reflect how the url *would* change,
          // if the option was clicked.
          optionSearchParams.set(optionNameLowerCase, value);
          const optionUrl = createUrl(pathname, optionSearchParams);

          // In order to determine if an option is available for sale, we need to:
          //
          // 1. Filter out all other param state
          // 2. Filter out invalid options
          // 3. Check if the option combination is available for sale
          //
          // This is the "magic" that will cross check possible variant combinations and preemptively
          // disable combinations that are not available. For example, if the color gray is only available in size medium,
          // then all other sizes should be disabled.
          const filtered = Array.from(optionSearchParams.entries()).filter(([key, value]) =>
            options.find(
              (option) => option.name.toLowerCase() === key && option.values.includes(value)
            )
          );
          const isAvailableForSale = combinations.find((combination) =>
            filtered.every(
              ([key, value]) => combination[key] === value && combination.availableForSale
            )
          );

          // The option is active if it's in the url params.
          const isActive = searchParams.get(optionNameLowerCase) === value;

          return (
            <button
              key={value}
              aria-disabled={!isAvailableForSale}
              disabled={!isAvailableForSale}
              onClick={() => {
                setLabel(value);
                router.replace(optionUrl, { scroll: false });
                showSizes();
              }}
              title={`${option.name} ${value}${!isAvailableForSale ? ' (Out of Stock)' : ''}`}
              className={clsx('flex min-w-[48px] items-center justify-center px-2 py-1 text-sm', {
                'cursor-default ring-2 ring-white': isActive,
                'ring-1 ring-transparent transition duration-300 ease-in-out hover:ring-white':
                  !isActive && isAvailableForSale,
                'relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700':
                  !isAvailableForSale
              })}
            >
              {value}
            </button>
          );
        })}
      </dd>
      <dt
        className={
          toggle
            ? 'flex items-center border border-t-0 border-white px-6 py-2 text-sm uppercase tracking-wide text-white hover:cursor-pointer'
            : 'flex items-center border border-white px-6 py-2 text-sm uppercase tracking-wide text-white hover:cursor-pointer'
        }
        onClick={showSizes}
      >
        {/* <div>{option.name}dkslajo</div> */}
        <div>{label}</div>

        <div className={toggle ? 'ml-2 rotate-180' : 'ml-2'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10">
            <path
              id="Polygon_1"
              data-name="Polygon 1"
              d="M6.5,0,13,10H0Z"
              transform="translate(13 10) rotate(180)"
              fill="#fff"
            />
          </svg>
        </div>
      </dt>
    </dl>
  ));
}
