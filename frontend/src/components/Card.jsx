import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

function Card({ product }) {
  const { role } = useSelector((state) => state.productSlice);

  return (
    <div className="mx-4 bg-white drop-shadow-md rounded-md flex items-center gap-4">
      <div className="relative">
        <h1 className="bg-[var(--primary)] py-1 px-2 font-bold text-white text-sm absolute rounded-tl-md">A</h1>
        <img
          src="https://images.unsplash.com/photo-1657759558201-d0229a8c87d5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="product-img"
          className="w-28 h-28 object-cover rounded-l-md"
        />
      </div>

      <div className="w-44">
        <div className="mb-4 -mt-1">
          <h2 className="text-sm font-bold mb-1">Fried Rice</h2>
          <p className="text-[8px] text-[var(--disabled)]">Nasi goreng is an Indonesian fried rice dish. It’s made by stir-frying pre-cooked rice with a mix of ingredients such as shallots, sauce, and...</p>
        </div>

        <div>
          <p className="text-xs">Rp 24.000</p>

          {role === "merchant" && (
            <div>
              <FontAwesomeIcon icon={faPenToSquare} />
              <FontAwesomeIcon icon={faTrash} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
