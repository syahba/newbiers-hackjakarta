import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function CreateNutritionPage() {
  const { state } = useLocation();
  const { ingredient } = useSelector((state) => state.productSlice);

  return (
    <div></div>
  );
}

export default CreateNutritionPage;
