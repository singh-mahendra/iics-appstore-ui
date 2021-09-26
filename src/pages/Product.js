import { Shell } from "@informatica/droplets-common";
import React from "react";
import ReactStars from "react-rating-stars-component";
//import { Link, useHistory } from "react-router-dom";

function Product({ productDetails }) {
  //let history = useHistory();
  const handleClick = () => {
    //history.push("/dashboard");
    Shell.navigate(`/products/${productDetails.id}`)
  };
  return (
    <div className="container" onClick={handleClick}>
      <img src={productDetails.icon}></img>
      <div className="flex-container">
        <div className="product-name">{productDetails.appName}</div>
        <div>{productDetails.publisher.name}</div>
        <div style={{ display: "flex", alignItems: "center",marginBottom:'10px' }} className="rating">
          <ReactStars
            count={5}
            size={24}
            isHalf={true}
            value={productDetails.avgRating}
            edit={false}
            activeColor="#ffd700"
          />
          <div style={{ marginTop: "6px" }}>{productDetails.avgRating}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
