import React from "react";
import ReactStars from "react-rating-stars-component";
//import { Link, useHistory } from "react-router-dom";
import { Button, Panel, Toolbar, IconButton, Tabs, Card, HeaderLevelProvider,MessageBubble } from "@informatica/droplets-core";
import {getProductDetails, installProduct} from './services/ProductService';
import {Shell} from "@informatica/droplets-common";

function Product({ productDetails }) {
  //let history = useHistory();
  const handleClick = () => {
    //history.push("/dashboard");
    Shell.navigate(`/products/${productDetails.id}`, {state: {productId: productDetails.id}})
  };
  const styles = {
    row: {
        display: "flex",
        marginBottom: "5px",
    },
    p: {
        margin: 0,
    },
    p_first_child: {
        flexBasis: "20%",
        margin: 0,
    },
};

const onInstallClick = async () => {
  const res = await installProduct();
  //showSuccess(true);
}

  return (
    // <div className="container" onClick={handleClick}>
    //   <img src={productDetails.icon}></img>
    //   <div className="flex-container">
    //     <div className="product-name">{productDetails.appName}</div>
    //     <div>{productDetails.publisher.name}</div>
    //     <div style={{ display: "flex", alignItems: "center",marginBottom:'10px' }} className="rating">
    //       <ReactStars
    //         count={5}
    //         size={24}
    //         isHalf={true}
    //         value={productDetails.avgRating}
    //         edit={false}
    //         activeColor="#ffd700"
    //       />
    //       <div style={{ marginTop: "6px" }}>{productDetails.avgRating}</div>
    //     </div>
    //   </div>
    // </div>
    <Card onClick={handleClick}>
    <HeaderLevelProvider level={1}>
        <Card.Header id="title" title={`${productDetails.appName}`} >
        <Toolbar role="list">
                <IconButton aria-labelledby="download title" onClick={onInstallClick}>
                    <i
                        className="aicon aicon__download"
                        role="listitem"
                        aria-label="download"
                        id="download"
                    />
                </IconButton>
                </Toolbar>
        </Card.Header>
    </HeaderLevelProvider>
    <Card.Body>
        <div style={styles.row}>
            <p style={styles.p_first_child}><img src={productDetails.icon} width="200" height="200"></img></p>
        </div>
        <div style={styles.row}>
          <ReactStars
              count={5}
              size={24}
              isHalf={true}
              value={productDetails.avgRating}
              edit={false}
              activeColor="#ffd700"
            />
            <div>{productDetails.avgRating}</div>
          </div>
        <div style={styles.row}>
            <p style={styles.p_first_child}>By</p>
            <p style={styles.p}><div>{productDetails.publisher.name}</div></p>
        </div>
        
    </Card.Body>
  </Card>
  );
}

export default Product;
