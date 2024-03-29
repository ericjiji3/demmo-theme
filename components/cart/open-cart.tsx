export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-white transition-colors">
      {/* <ShoppingCartIcon
        className={clsx('h-4 transition-all ease-in-out hover:scale-110', className)}
      /> */}
      <div className="mt-1 text-sm font-medium">BAG</div>
      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-white text-[11px] font-medium text-black">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
