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
    <div className="my-4 mx-3 bg-[var(--light-grey)] flex items-center px-3 rounded">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-[var(--grey)] mr-3"
      />
      <input
        type="text"
        placeholder="What shall we deliver?"
        className="bg-[var(--light-grey)] py-2 w-full text-sm focus:outline-none"
        value={input}
        onChange={(e) => inputHandler(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
