import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar() {
  return (
    <div className="relative text-center my-3 w-[360px]">
      <input type="text" placeholder="What shall we deliver?" className="bg-[var(--grey)] px-8 py-1.5 w-screen mx-4 rounded" />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-7 top-2.5 text-[var(--disabled)]" />
    </div>
  );
}

export default SearchBar;
