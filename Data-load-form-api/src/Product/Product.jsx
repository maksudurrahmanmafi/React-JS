import "./product.css"

const Product = ({product}) => {
    console.log(product);
    const {image , title,category} = product
    
    
    return (
        <div className="product-img">
           <img src={image} alt={product.description} />
           <h2>{title}</h2>
           <p>{category}</p>
           <button>Add to Cart</button>
        </div>
    );
};

export default Product;