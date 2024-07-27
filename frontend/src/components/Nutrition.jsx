import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nutrition() {

  return (
    <div className="bg-white p-3 text-sm font-normal w-full rounded flex flex-col items-start outline outline-[var(--grey)]">
      <div className="flex justify-between w-full">
        <div className="text-[var(--grey)]">Energy</div>
        <div className="flex">
          <div>1400</div>
          <div className="w-6 text-right">KJ</div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-[var(--grey)]">Energy</div>
        <div className="flex">
          <div>1400</div>
          <div className="w-6 text-right">KJ</div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-[var(--grey)]">Saturated Fatty</div>
        <div className="flex">
          <div>1400</div>
          <div className="w-6 text-right">g</div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-[var(--grey)]">Sugar</div>
        <div className="flex">
          <div>1400</div>
          <div className="w-6 text-right">g</div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-[var(--grey)]">Salt</div>
        <div className="flex">
          <div>1400</div>
          <div className="w-6 text-right">g</div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-[var(--grey)]">Protein</div>
        <div className="flex">
          <div>1400</div>
          <div className="w-6 text-right">g</div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-[var(--grey)]">Fibres</div>
        <div className="flex">
          <div>1400</div>
          <div className="w-6 text-right">g</div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-[var(--grey)]">Fruit, vegetables & legumes</div>
        <div className="flex">
          <div>14</div>
          <div className="w-6 text-right">%</div>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;
