import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "./Modal";

function CardGrade({ nutrition }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white w-full drop-shadow-md rounded flex flex-col items-start outline outline-1.5 outline-[var(--secondary)]">
      <div className="text-white h-20 px-8 w-full flex justify-between items-center bg-[var(--secondary)]">
        <div>Nutri-Score Grade:</div>
        <div className="text-4xl font-bold">{nutrition.grade}</div>
      </div>
      <div className="w-full h-12 px-8 flex justify-between items-center text-sm font-normal">
        <div>Total Score: {nutrition.score}</div>
        <FontAwesomeIcon
          icon={faQuestionCircle}
          className="h-5 text-[var(--grey)]"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {isOpen && <Modal setIsOpen={setIsOpen} nutrition={nutrition}></Modal>}
    </div>
  );
}

export default CardGrade;
