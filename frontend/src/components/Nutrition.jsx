function Nutrition({ nutrition }) {

  return (
    <div className="bg-white p-3 text-sm font-normal w-full rounded flex flex-col items-start outline outline-1 outline-[var(--grey)]">
      <div className="flex justify-between w-full">
        <p className="text-[var(--grey)]">Energy</p>
        <div className="flex">
          <p>{nutrition.energy}</p>
          <p className="w-6 text-right">KJ</p>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <p className="text-[var(--grey)]">Saturated Fatty</p>
        <div className="flex">
          <p>{nutrition.saturated_fatty}</p>
          <p className="w-6 text-right">g</p>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <p className="text-[var(--grey)]">Sugar</p>
        <div className="flex">
          <p>{nutrition.sugar}</p>
          <p className="w-6 text-right">g</p>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <p className="text-[var(--grey)]">Salt</p>
        <div className="flex">
          <p>{nutrition.salt}</p>
          <p className="w-6 text-right">g</p>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-[var(--grey)]">Protein</div>
        <div className="flex">
          <p>{nutrition.protein}</p>
          <p className="w-6 text-right">g</p>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-[var(--grey)]">Fibres</div>
        <div className="flex">
          <p>{nutrition.fibres}</p>
          <p className="w-6 text-right">g</p>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-[var(--grey)]">Fruit, Vegetables & Legumes</div>
        <div className="flex">
          <p>{nutrition.fruit_vegetable_legumes}</p>
          <p className="w-6 text-right">%</p>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;
