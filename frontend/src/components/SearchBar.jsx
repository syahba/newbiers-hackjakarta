import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar() {
  return (
    <div className="relative text-center my-5">
      <input type="text" placeholder="What shall we deliver?" className="bg-[var(--grey)] px-8 py-1.5 w-72 rounded" />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-6 top-2.5 text-[#a7a7a7]" />
    </div>
  );
}

export default SearchBar;
