import { Link, useLoaderData } from "react-router-dom";
import { BsArrowUpLeftCircleFill} from 'react-icons/bs';
const ProductDetails = () => {
  const product = useLoaderData();
  const {
    id,
    brand,
    title,
    description,
    discountPercentage,
    images,
    price,
    rating
  } = product;
  return (
    <div className={`grid grid-cols-1 py-16 md:grid-cols-2 items-center gap-11 md:p-8`}>
      <div className="flex-1 items-center grid md:grid-cols-2 gap-8">
        {images?.slice(0,4).map((img) => (
          <img className="w-full h-60 p-3 shadow-lg object-cover" key={id} src={img} />
        ))}
      </div>
      <div className="flex-1 text-1xl space-y-3 px-3">
        <h2 className="text-4xl">Manufacturer: <span className="font-bold">{brand}</span> </h2>
        <h2>Label: {title}</h2>
        <div className="rating text-[20px]">
            <h2 className="mr-3 font-bold">
            {rating}
            </h2>
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <p className="w-2/3">Product Ifo: {description}</p>
        <p>Price: {price}</p>
        <div className="flex items-center gap-3">
        <p><strong>Price Reduction: {discountPercentage}</strong></p>
        <div className="text-sky-500 text-[]">
        <Link to='/'>
        <BsArrowUpLeftCircleFill></BsArrowUpLeftCircleFill>
        </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
