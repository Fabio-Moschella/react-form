import { useState } from "react";
import ProductList from "./data/productList";
//import "bootstrap";

function App() {
  const [product, setProduct] = useState(ProductList);
  const [arr, setArr] = useState([]);

  return (
    <div className="container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Submit");
          const arrNew = [...arr, 90];
          setArr(arrNew);
        }}
        className="d-flex"
      >
        <input
          onChange={(event) => {
            console.log(event.target.value);
          }}
          type="text"
        />
        <button className="btn btn-primary" type="submit">
          ADD
        </button>
        <h1>{JSON.stringify(arr)}</h1>
      </form>
    </div>
  );
}

export default App;
