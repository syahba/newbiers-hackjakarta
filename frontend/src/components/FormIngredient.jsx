import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function FormIngredient() {

  const [data, setData] = useState([1, 2])


  return (
    <>
    <div className="mb-1 text-xs flex justify-between">
      <label className="text-[var(--neutral)]">
      Ingredients
      </label>
      <button 
        className="w-4 h-4 bg-[var(--secondary)] text-white rounded-sm flex items-center justify-center"
        onClick={() => setData([1,2,3,4,5,6,7,8,9,10])}
      >
        <FontAwesomeIcon icon={faPlus} className="h-2" />
      </button>
    </div>
    <div className="w-full">
      {
        data.map(elm => {
          return (
            <div key={elm} className="w-full flex gap-3 mb-2">
              <input value={elm} type="text" className="outline w-full outline-1 outline-[var(--grey)] rounded py-1 px-3" />
              <input type="text" className="outline w-6/12 outline-1 outline-[var(--grey)] rounded py-1 px-3" />
            </div>
          )
        })
      }
    </div>
    </>
  );
}

export default FormIngredient;
