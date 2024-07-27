import { useSelector } from "react-redux";

function ListProductPage() {
  const { role } = useSelector(state => state.loginSlice);

  return (
    <div>
      <h1>this is {role}</h1>
    </div>
  );
}

export default ListProductPage;