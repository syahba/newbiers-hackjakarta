import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import { getAllProducts } from "../redux/slices/productSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

function ListProductPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { role } = useSelector((state) => state.loginSlice);
  const { products } = useSelector((state) => state.productSlice);

  useEffect(() => {
    if (!role) {
      navigate("/");
    } else {
      dispatch(getAllProducts());
    }
  }, []);

  return (
    <div>
      <Navbar header={"List Product"}></Navbar>

      <SearchBar></SearchBar>

      {products.map((v, i) => (
        <div key={i}>
          <Card product={v}></Card>
        </div>
      ))}

      {role === "merchant" && (
        <FontAwesomeIcon
          icon={faPlus}
          className="text-white bg-[var(--primary)] py-2 px-2.5 rounded fixed bottom-5 right-5 drop-shadow-md"
        />
      )}
    </div>
  );
}

export default ListProductPage;
