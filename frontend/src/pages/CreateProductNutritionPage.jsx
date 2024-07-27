import Navbar from "../components/Navbar";
import CardGrade from "../components/CardGrade";
import Nutrition from "../components/Nutrition"
import FormIngredient from "../components/FormIngredient"
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function CreateProductNutritionPage() {
  const { state } = useLocation();
  const { ingredient } = useSelector((state) => state.productSlice);

  const [isOpen, setIsOpen] = useState({
    status: false,
    id: ''
  });

  return (
    <div>
      <Navbar header={"Create Product - Nutri-Score"}></Navbar>
      <div className="mb-6">
        <div className="input-group-uniq">
          <label htmlFor="name" className="product-label-uniq">
            Product Name
          </label>
          <input type="text" id="name" className="product-input-uniq" value={'ini value'} readOnly disabled />
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

      <div className="flex justify-between mx-4">
        <button className="bg-white outline outline-1 outline-[var(--secondary)] rounded px-12 py-2">Help Fill Form</button>
        <button className="bg-[var(--primary)] rounded px-10 py-2 text-white">Next</button>
      </div>
    </div>
  )
}

export default CreateProductNutritionPage;