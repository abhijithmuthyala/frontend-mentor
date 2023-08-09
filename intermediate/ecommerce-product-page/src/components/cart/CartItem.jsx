import products from "../../data/products.json";

export default function CartItem({ id }) {
  const { title, price, discountPercent } = products.find(
    (product) => product.id === id
  );
  const discountedPrice = price * (1 - discountPercent / 100);
  const units = 2;
  const totalPrice = units * discountedPrice;

  function handleDeleteItem() {}

  return (
    <li className="grid grid-cols-[48px_1fr_14px]">
      <img
        src={`/images/${id}/1-thumbnail.jpg`}
        alt="Product thumbnail"
        className="rounded-md"
      />
      <div className="pl-3 pr-6">
        <p className="capitalize">{title}</p>
        <p>
          <span className="mr-3">
            ${discountedPrice.toFixed(2)} x {units}
          </span>
          <span className="font-bold text-black">${totalPrice.toFixed(2)}</span>
        </p>
      </div>
      <button
        onClick={handleDeleteItem}
        aria-label="Delete item"
        className="self-center aspect-[14/16] bg-[url('/images/icon-delete.svg')] bg-cover bg-center"
      ></button>
    </li>
  );
}
