import Navbar from "../components/Navbar";
import CardGrade from "../components/CardGrade";
import Nutrition from "../components/Nutrition"
import FormIngredient from "../components/FormIngredient"

function CreateProductNutritionPage() {
  return (
    <div className="relative h-full">
      <Navbar header={"Create Product - Nutri-Score"}></Navbar>
      <div className="mb-6 max-h-[80%] overflow-y-auto">
        <div className="input-group-uniq">
          <label htmlFor="name" className="product-label-uniq">
            Product Name
          </label>
          <input type="text" id="name" className="product-input-uniq" />
        </div>

        <div className="mx-4 mb-3">
          <CardGrade />
        </div>

        <div className="mx-4 mb-6">
          <Nutrition />
        </div>

        <div className="mx-4 mb-3">
          <FormIngredient />
        </div>
      </div>

      <div className=" absolute bottom-0 w-full bg-white text-sm">
        <div className="flex mx-4 pt-3 pb-5 gap-3">
          <button className="bg-white grow outline outline-1 outline-[var(--secondary)] rounded py-2">
          Generate Nutri-Score
          </button>
          <button
            className="bg-[var(--primary)] w-1/3 rounded py-2 text-white"
            // onClick={submitHandler}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateProductNutritionPage;