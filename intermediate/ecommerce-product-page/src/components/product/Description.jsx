import AddToCart from "./AddToCart";

import products from "../../data/products.json";

export default function Description({ cta, productId }) {
  const { title, description } = products.find(
    (product) => product.id === productId
  );

  return (
    <article className="px-6 md:px-8 md:self-center lg:px-14">
      <h2 className="font-bold mb-3 md:mb-10">
        <p className="text-3xl md:text-[44px] md:leading-[1]">
          <span className="mb-2 block uppercase text-orange-900 text-sm md:text-base md:mb-6">
            Sneaker company
          </span>
          {title}
        </p>
      </h2>
      <p className="mb-7 text-blue-400 font-normal md:text-lg">{description}</p>
      <p className="flex flex-wrap justify-between items-center mb-6 font-bold lg:flex-col lg:items-start lg:gap-y-1">
        <span className="flex items-center md:items-start">
          <span className="text-3xl font-bold mr-4">$125.00</span>
          <span className="text-orange-900 py-1 px-2 bg-orange-200 rounded-md">
            50%
          </span>
        </span>
        <s className="text-blue-200">$250.00</s>
      </p>
      <AddToCart productId={productId} />
    </article>
  );
}
