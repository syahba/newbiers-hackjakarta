import { faUpload } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateIngredient, uploadImage } from "../redux/slices/productSlice";

function CreateProductPage() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { url } = useSelector((state) => state.productSlice);

  const [input, setInput] = useState({
    name: "",
    price: 0,
    description: "",
    image:
      "https://images.unsplash.com/photo-1657759558201-d0229a8c87d5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    } else {
      dispatch(generateIngredient(input.name));

      input.image = url;
      navigation("/products/create/nutrition", { state: input });
    }
  };

  return (
    <div>
      <Navbar header={"Create Product"}></Navbar>

      <div className="mb-6">
        <div className="input-group">
          <label htmlFor="name" className="product-label">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            className="product-input"
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
          <img
            className="w-[200px] h-[200px] object-cover rounded"
            src={input.image}
            alt="preview-img"
          />
        </div>
      </div>

      <div className="flex justify-between mx-4">
        <button className="bg-white outline outline-1 outline-[var(--secondary)] rounded px-12 py-2 drop-shadow">
          Help Fill Form
        </button>
        <button
          className="bg-[var(--primary)] rounded px-10 py-2 text-white drop-shadow-md"
          onClick={submitHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CreateProductPage;
