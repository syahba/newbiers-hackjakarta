import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Card({ product, setIsOpen, setId }) {
  const navigate = useNavigate();

  const { role } = useSelector((state) => state.loginSlice);

  return (
    <div className="flex items-start gap-4 mx-4 my-3 bg-white rounded-md drop-shadow-md">
      <div className="relative w-28">
        <h1
          className="absolute px-2 py-1 text-sm font-bold text-white cursor-pointer rounded-tl-md"
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
          className="object-cover w-28 h-28 rounded-l-md"
        />
      </div>

      <div className="flex flex-col justify-between py-3 mr-4 grow h-28">
        <div className="">
          <h2 className="mb-1 text-sm font-bold">{product.name}</h2>
          <p className="text-xs text-[var(--grey)]">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm">{product.price}</p>

          {/* {role === "merchant" && (
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="cursor-pointer"
              onClick={() => navigate("/products/create", { state: product })}
            />
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Card;
