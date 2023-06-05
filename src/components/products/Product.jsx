import React from "react";
import ProductParagraphs from "./productParagraphs/ProductParagraphs.jsx";
import ProductPictures from "./productPictures/ProductPictures.jsx";
import "./Product.css";
const Product = () => {
    return(
        <products>
            <ProductParagraphs/>
            <ProductPictures/>
        </products>
    )
}
export default Product;