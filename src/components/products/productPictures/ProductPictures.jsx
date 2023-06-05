import "./ProductPictures.css";
import Via from "../../../assets/photos/Via.png";
import Shift from "../../../assets/photos/Shift.png";

const ProductPictures = () => {
    return(
        <div className="__product-boxes">
            <div className="__product-box">
                <p className="__product-box__title">Via</p>
                <p className="__product-box__p">Business travel automatizations software.</p>
                <img src={ Via } alt="Via"/>
            </div>
            <div className="__product-box">
                <p className="__product-box__title">Shift</p>
                <p className="__product-box__p">Central base of transfered mobile and fixed numbers.</p>
                <img src={ Shift } alt="Shift"/>
            </div>
        </div>
    )
}
export default ProductPictures;