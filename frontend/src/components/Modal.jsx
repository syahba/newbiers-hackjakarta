import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../redux/slices/productSlice";

function Modal({ isOpen, setIsOpen }) {
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.productSlice);

  useEffect(() => {
    dispatch(getDetailProduct(isOpen.id));
  }, [product]);

  return (
    <div className="fixed inset-0 bg-[#1515153b]">
      {Object.keys(product).length !== 0 && (
        <div className="bg-white drop-shadow-lg rounded-lg m-4 p-4">
          <div className="flex items-center justify-between mb-3">
            <h1
              className="text-xl font-bold"
              style={{ color: product.grade_detail.color }}
            >
              {product.grade_detail.title}
            </h1>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setIsOpen({ status: false, id: "" })}
            />
          </div>

          <p className="text-xs">
            Nutri-Score A is a rating given to foods that are considered the
            healthiest options. It is part of the Nutri-Score labeling system,
            which helps consumers make healthier food choices. 
          </p>

          <a
            className="text-[10px] underline text-[#0075FF]"
            href={product.grade_detail.url}
          >
            Here detail about Nutri-Score
          </a>

          <img
            className="w-72 h-44 object-cover mt-1"
            src={product.grade_detail.image}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default Modal;
