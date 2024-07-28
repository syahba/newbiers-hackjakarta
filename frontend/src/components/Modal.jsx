import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Modal({ nutrition, setIsOpen }) {
  return (
    <div className="bg-[#1515153b]">
      <div className="bg-white drop-shadow-lg rounded-lg m-4 p-4 w-[360px] h-fit absolute inset-0">
        <div className="flex items-center justify-between mb-3">
          <h1
            className="text-xl font-bold"
            style={{ color: nutrition.grade_detail.color }}
          >
            {nutrition.grade_detail.title}
          </h1>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
          />
        </div>

        <p className="text-xs">{nutrition.grade_detail.description}</p>

        <a
          className="text-[10px] underline text-[#0075FF]"
          href={nutrition.grade_detail.url}
        >
          Here detail about Nutri-Score
        </a>

        <img
          className="w-72 h-44 object-cover mt-1"
          src={nutrition.grade_detail.image}
          alt="nutri-score"
        />
      </div>
    </div>
  );
}

export default Modal;
