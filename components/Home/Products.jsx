/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../../utils/cartSlice";

const Products = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddItem = (data) => {
    dispatch(addItem(data));
    // eslint-disable-next-line react/prop-types
    alert(`${data.title} added to cart`);
  };

  const { image, title, category, id, price } = data;
  return (
    <>
      <div className="relative mt-24 mb-2 p-2 w-80 h-[500px] inline-block transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
        <Link to={`/product/${id}`}>
          <div className="group relative w-auto  h-[350px] con">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-transparent group-hover:opacity-75 lg:aspect-none lg:h-80">
              <Link to={`/product/${id}`}></Link>
              <img
                src={image}
                alt={title}
                className="bg-white border h-[300px] rounded-xl md:h-full w-full md:object-fill md:object-center object-contain  lg:h-full lg:w-full"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700 md:text-xl">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  {category}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{title}</p>
            </div>
            <p className="text-sm md:text-xl font-medium text-gray-900">
              ${price}
            </p>
          </div>

          {/* <img src={image} className="rounded-xl h-72" alt={title} />

          <ul>
            <li className="font-bold text-xl">{category}</li>
            <li className="font-semibold ">{title}</li>
            <li className="font-semibold ">${price}</li>
          </ul> */}
        </Link>

        {/* <button
          className="absolute bottom-0 left-0 p-1 rounded-md mb-2  ml-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
          onClick={() => handleAddItem(data)}
        >
          Add to cart
        </button> */}
      </div>
    </>
  );
};

export default Products;
