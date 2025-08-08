import { useState } from "react";

function Form(props) {
  const [product, setProduct] = useState(props.data);
  const [sumitted, setSubmitted] = useState(false);

  const changeFormData = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div className="form-overlay">

      <form>

        <div className="form-group">
          <label>Name:</label>
          <input className="form-control mt-2" value={product.name} type="text" name="name" placeholder="Enter Product Name" 
          onChange={changeFormData}
          />
          {sumitted && product.name.trim().length < 5 && (
            <span className="text-danger">
              Product name must be at least 5 characters
            </span>
          )}
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
            className="form-control mt-2"
            value={product.price}
            onChange={changeFormData}
            type="number"
            name="price"
            placeholder="Enter Product Price"
          />
          {sumitted &&
            (product.price === "" ||
              isNaN(product.price) ||
              Number(product.price) <= 100) && (
              <span className="text-danger">
                Valid product price required (greater than 100)
              </span>
            )}
        </div>

       
        <div className="form-group">
          <label>Category:</label>
        <select className="form-control mt-2" name="category" value={product.category} onChange={changeFormData} >
            <option value="" disabled hidden>
              Select Product Category
            </option>
            <option value="mobiles">Mobiles</option>
            <option value="laptops">Laptops</option>
            <option value="tv">TV's</option>
            <option value="charger cable">Charger Cable</option>
            <option value="charger adapter">Charger Adapter</option>
            <option value="speaker">Speaker</option>
            <option value="bluetooth speaker">Bluetooth Speaker</option>
          </select>
          {sumitted && product.category === "" && (
            <span className="text-danger">Product category required</span>
          )}
        </div>

        <button
          className="btn btn-primary float-end ms-2"
          onClick={(e) => {
            e.preventDefault();
            setSubmitted(true);
            if (
              product.name.trim().length >= 5 &&
              product.price !== "" &&
              !isNaN(product.price) &&
              Number(product.price) > 0 &&
              product.category !== ""
            ) {
              props.add(product);
            }
          }}
        >
          Send
        </button>

        <button
          className="btn btn-danger float-end"
          onClick={(e) => {
            e.preventDefault();
            props.close();
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Form;
