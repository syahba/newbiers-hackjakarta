import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

function ListProductPage() {
  const { role } = useSelector(state => state.loginSlice);

  return (
    <div>
      <Navbar header={'List Product'}></Navbar>

      <SearchBar></SearchBar>
      <h1>this is {role}</h1>
    </div>
  );
}

export default ListProductPage;