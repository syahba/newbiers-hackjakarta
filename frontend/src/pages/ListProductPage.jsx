import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import { getAllProducts } from "../redux/slices/productSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Modal from "../components/Modal";

function ListProductPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { role } = useSelector((state) => state.loginSlice);
  const { products } = useSelector((state) => state.productSlice);

  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    if (!role) {
      navigate("/");
    } else {
      dispatch(getAllProducts());
    }
  }, []);

  return (
    <div className="relative h-full">
      <Navbar header={"List Product"}></Navbar>

      <SearchBar></SearchBar>

      {products.map((v, i) => (
        <div key={i}>
          <Card product={v} setIsOpen={setIsOpen} setId={setId}></Card>
        </div>
      ))}

      {role === "merchant" && (
        <FontAwesomeIcon
          icon={faPlus}
          className="text-white bg-[var(--primary)] py-4 px-4 shadow rounded absolute bottom-8 right-5 drop-shadow-md cursor-pointer"
          onClick={() => navigate('/products/create')}
        />
      )}

      {isOpen && (<Modal nutrition={products.find(v => v.id === id)} setIsOpen={setIsOpen}></Modal>)}
    </div>
  );
}

export default ListProductPage;
