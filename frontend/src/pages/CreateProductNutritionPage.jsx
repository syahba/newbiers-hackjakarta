import Navbar from "../components/Navbar";
import CardGrade from "../components/CardGrade";
import Nutrition from "../components/Nutrition";
import FormIngredient from "../components/FormIngredient";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, generateNutrition, updateProduct } from "../redux/slices/productSlice";
import { useEffect, useState } from "react";

function CreateProductNutritionPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { state } = useLocation();
  const { ingredient, message } = useSelector((state) => state.productSlice);
  const { role } = useSelector(state => state.loginSlice);

  const [data, setData] = useState({});
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    if (!role) {
      navigate("/");
    } else {
      setData(ingredient);
      setIngredients(ingredient.ingredients);
      
      if (Object.keys(state.ingredients).length !== 0) {
        setData(state);
        setIngredients(state.ingredients);
      };
    };
  }, []);

  useEffect(() => {
    if (message === 'success generate nutrition') {
      setData(ingredient);
    };
    console.log(data);
  }, [ingredient, message]);

  console.log(ingredient)
  const submitHandler = (e) => {
    e.preventDefault();
    
    const payload = {
      ...state,
      ...ingredient,
    };
    
    if (Object.keys(state.ingredients).length !== 0 && message === 'success generate nutrition') {
      dispatch(updateProduct(payload));
    } else if (Object.keys(state.ingredients).length === 0) {
      dispatch(createProduct(payload));
    } else {
      dispatch(updateProduct(state));
    }

    navigate("/products");
  };

  const regenerateNutrition = (e) => {
    e.preventDefault();

    dispatch(generateNutrition(data.type, ingredients));
  };

  return (
    <div className="relative h-full">
      {Object.keys(data).length !== 0 ? (
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
              <CardGrade nutrition={data} />
            </div>

            <div className="mx-4 mb-6">
              <Nutrition nutrition={data.nutrition} />
            </div>

            <div className="mx-4 mb-3">
              <FormIngredient
                ingredient={ingredients}
                setIngredients={setIngredients}
              />
            </div>
          </div>

          <div className="absolute bottom-0 w-full bg-white text-sm">
            <div className="flex mx-4 pt-3 pb-5 gap-3">
              <button
                className="bg-white grow outline outline-1 outline-[var(--secondary)] rounded py-2"
                onClick={regenerateNutrition}
              >
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
