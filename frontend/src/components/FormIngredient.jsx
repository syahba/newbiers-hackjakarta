import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function FormIngredient({ ingredient, setIngredient }) {

  useEffect(() => {
    setIngredient(ingredient);
  }, [ingredient]);


  return (
    <div>
      <div className="mb-1 text-xs flex justify-between">
        <label className="text-[var(--neutral)]">Ingredients</label>
        <button
          className="w-4 h-4 bg-[var(--secondary)] text-white rounded-sm flex items-center justify-center"
          onClick={() => setIngredient([...ingredient, {name: '', measurements: ''}])}
        >
          <FontAwesomeIcon icon={faPlus} className="h-2" />
        </button>
      </div>
      <div className="w-full">
        {ingredient.map((v, i) => (
          <div key={i} className="w-full flex gap-3 mb-2">
            <input
              type="text"
              className="outline w-full outline-1 outline-[var(--grey)] rounded py-1 px-3"
              defaultValue={v.name}
              onChange={(elm) => {
                let temp = [...ingredient]
                temp[i] = {...v, name: elm.target.value}
                setIngredient(temp)
              }}
            />
            <input
              type="text"
              className="outline w-6/12 outline-1 outline-[var(--grey)] rounded py-1 px-3"
              defaultValue={v.measurements}
              onChange={(elm) => {
                let temp = [...ingredient]
                temp[i] = {...v, measurements: elm.target.value}
                setIngredient(temp)
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormIngredient;
