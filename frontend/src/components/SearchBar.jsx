import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";
import { useState } from "react";

function SearchBar() {
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  const inputHandler = (value) => {
    setInput(value);
    dispatch(getAllProducts(value));
  };

  return (
    <div className="relative text-center my-4 w-[360px]">
      <input
        type="text"
        placeholder="What shall we deliver?"
        className="bg-[var(--grey)] px-8 py-1.5 w-screen mx-4 rounded"
        value={input}
        onChange={(e) => inputHandler(e.target.value)}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute left-7 top-2.5 text-[var(--disabled)]"
      />
    </div>
  );
}

export default SearchBar;
