import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar({ header }) {
  return (
    <div className="flex items-center bg-white drop-shadow-md py-3 text-[var(--neutral)] mb-5">
      <FontAwesomeIcon icon={faArrowLeft} className="mx-5 text-sm" />
      <h1 className="font-semibold text-base">{header}</h1>
    </div>
  );
}

export default Navbar;