import Navbar from "../components/Navbar";
import CardGrade from "../components/CardGrade";
import Nutrition from "../components/Nutrition";
import FormIngredient from "../components/FormIngredient";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../redux/slices/productSlice";

function CreateProductNutritionPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { state } = useLocation();
  const { ingredient } = useSelector((state) => state.productSlice);

  const submitHandler = (e) => {
    e.preventDefault();

    const payload = {
      ...state,
      ...ingredient,
    };

    dispatch(createProduct(payload));
    navigate("/products");
  };

  return (
    <div className="">
      {Object.keys(ingredient).length !== 0 ? (
        <div className="relative h-full">
          <Navbar header={"Create Product - Nutri-Score"}></Navbar>

          <div className="mb-6 max-h-[80%] overflow-y-auto">
            <div className="input-group-uniq">
              <label htmlFor="name" className="product-label-uniq">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                className="product-input-uniq"
                value={state.name}
                readOnly
                disabled
              />
            </div>

            <div className="mx-4 mb-3">
              <CardGrade nutrition={ingredient} />
            </div>

            <div className="mx-4 mb-6">
              <Nutrition nutrition={ingredient.nutrition} />
            </div>

            <div className="mx-4 mb-3">
              <FormIngredient ingredient={ingredient.ingredients} />
            </div>
          </div>

          <div className="absolute bottom-0 w-full bg-white text-sm">
            <div className="flex mx-4 pt-3 pb-5 gap-3">
              <button className="bg-white grow outline outline-1 outline-[var(--secondary)] rounded py-2">
                Generate Nutri-Score
              </button>
              <button
                className="bg-[var(--primary)] w-1/3 rounded py-2 text-white"
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default CreateProductNutritionPage;
