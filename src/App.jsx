import { useState } from "react";
// import ProductList from "./data/productList";

function App() {
  const [productsList, setProductsList] = useState([
    "GeForceRtx5090",
    "GeForceRTX5070Ti",
    "GeForceRTX5060Ti",
  ]);

  const [newProduct, setnewProduct] = useState("");

  console.log(productsList);

  return (
    <div className="container">
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const newProductList = [...productsList, newProduct];
          setProductsList(newProductList);
          setnewProduct("");
        }}
        className="d-flex "
      >
        <input
          value={newProduct}
          onChange={(event) => setnewProduct(event.target.value)}
          type="text"
          className="form-control grow-1"
        />
        <button className="btn btn-primary">ADD</button>
      </form>
    </div>
  );
}

export default App;
