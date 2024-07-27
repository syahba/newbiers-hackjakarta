import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardGrade() {
  // const { role } = useSelector((state) => state.loginSlice);

  return (
    <div className="bg-white w-full drop-shadow-md rounded flex flex-col items-start outline outline-[var(--secondary)]">
     <div className="text-white h-20 px-8 w-full flex justify-between items-center bg-[var(--secondary)]">
      <div>Nutri-Score Grade:</div>
      <div className="text-4xl font-bold">A</div>
     </div>
     <div className="w-full h-12 px-8 flex justify-between items-center text-sm font-normal">
      <div>Total Score: 2</div>
      <FontAwesomeIcon icon={faQuestionCircle} className="h-5 text-[var(--grey)]" />
     </div>
    </div>
  );
}

export default CardGrade;
