import { use } from "react";
import Product from "./Product";
import "./products.css"

const Products = ({ catsApi }) => {
  const product = use(catsApi);
  console.log(product);

  return (
    <div>
      <h2>length : {product.length}</h2>

      <div className="product">
        {product.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
