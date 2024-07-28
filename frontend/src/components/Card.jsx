import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Card({ product, setIsOpen, setId }) {
  const navigate = useNavigate();

  const { role } = useSelector((state) => state.loginSlice);

  return (
    <div className="mx-4 bg-white drop-shadow-md rounded-md flex items-start gap-4 my-3">
      <div className="relative w-28">
        <h1
          className="py-1 px-2 font-bold text-white text-sm absolute rounded-tl-md cursor-pointer"
          style={{ backgroundColor: product.grade_detail.color }}
          onClick={() => {
            setIsOpen(true);
            setId(product.id);
          }}
        >
          {product.grade}
        </h1>
        <img
          src={product.image}
          alt="product-img"
          className="w-28 h-28 object-cover rounded-l-md"
        />
      </div>

      <div className="grow mr-4 py-3 h-28 flex flex-col justify-between">
        <div className="">
          <h2 className="text-sm font-bold mb-1">{product.name}</h2>
          <p className="text-xs text-[var(--grey)]">{product.description}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm">{product.price}</p>

          {role === "merchant" && (
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="cursor-pointer"
              onClick={() => navigate("/products/create", { state: product })}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
