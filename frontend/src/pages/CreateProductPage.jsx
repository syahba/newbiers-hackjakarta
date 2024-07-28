import { faUpload } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateIngredient, getDetailProduct, uploadImage } from "../redux/slices/productSlice";

function CreateProductPage() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { state } = useLocation();
  const { url } = useSelector((state) => state.productSlice);
  const { role } = useSelector(state => state.loginSlice);

  useEffect(() => {
    if (!role) {
      navigate("/");
    };
  }, []);

  const checkProduct = state ? Object.keys(state).length !== 0 : false;
  const [input, setInput] = useState({
    name: checkProduct ? state.name : "",
    price: checkProduct ? parseInt(state.price.replace(/[^0-9.-]+/g,"").replace(".", "")) : 0,
    description: checkProduct ? state.description : "",
    image: checkProduct ? state.image : ""
  });

  const imageHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      dispatch(uploadImage(e.target.files[0]));

      setInput((prev) => ({
        ...prev,
        image: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };

  const inputHandler = (e) => {
    const { id, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (Object.values(input).includes("")) {
      alert("Please fill all field data!");
    } else if (checkProduct && state.name === input.name) {
      state.price = input.price;
      state.description = input.description;
      state.image = url;

      navigation("/products/create/nutrition", { state: state });
    } else {
      dispatch(generateIngredient(input.name));
      
      input.image = url;
      navigation("/products/create/nutrition", { state: input });
    }
  };

  return (
    <div className="relative h-full">
      <Navbar header={"Create Product"}></Navbar>

      <div className="mb-6">
        <div className="input-group">
          <label htmlFor="name" className="product-label-uniq">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            className="product-input-uniq"
            value={input.name}
            onChange={inputHandler}
          />
        </div>

        <div className="input-group">
          <label htmlFor="price" className="product-label">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="product-input"
            value={input.price}
            onChange={inputHandler}
          />
        </div>

        <div className="input-group">
          <label htmlFor="description" className="product-label">
            Description
          </label>
          <textarea
            id="description"
            className="product-input"
            value={input.description}
            onChange={inputHandler}
          ></textarea>
        </div>

        <div className="input-group">
          <label className="product-label">Image</label>
          <label
            htmlFor="image"
            className="bg-[var(--secondary)] text-white text-xs w-32 text-center py-2 px-2 rounded cursor-pointer mb-2"
          >
            <span>
              <FontAwesomeIcon icon={faUpload} className="mr-3" />
            </span>
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            className="hidden"
            onChange={imageHandler}
          />
          {input.image && (
            <img
              className="w-[200px] h-[200px] object-cover rounded"
              src={input.image}
              alt="preview-img"
            />
          )}
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-white text-sm">
        <div className="flex mx-4 pt-3 pb-5 gap-3">
          <button disabled className="bg-white grow text-white outline-[var(--secondary)] rounded py-2">
            Help Fill Form
          </button>
          <button
            className="bg-[var(--primary)] w-1/3 rounded py-2 text-white"
            onClick={submitHandler}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateProductPage;
