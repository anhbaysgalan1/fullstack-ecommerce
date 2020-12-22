import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { averageRating } from "../../functions/rating";
import defaultImage from "../../images/defaultImage.jpg";
import "./productCard.css";

const ProductCard = ({ product }) => {
  // destructure
  const { images, title, description, price, slug } = product;
  const history = useHistory();
  const handleImageClick = (e) => {
    e.preventDefault();
    // console.log(history);
    history.push(`/product/${slug}`);
  };

  return (
    <div className="sy">
      <Card
        cover={
          <img
            src={images && images.length ? images[0].url : defaultImage}
            style={{ height: "150px", objectFit: "cover", cursor: "pointer" }}
            className="p-1 img-hover-zoom img-hover-zoom--xyz"
            onClick={handleImageClick}
          />
        }
        actions={[
          <Link to={`/product/${slug}`}>
            <EyeOutlined className="text-warning" /> <br /> View Product
          </Link>,
          <>
            <ShoppingCartOutlined className="text-danger" /> <br /> Add to Cart
          </>,
        ]}
      >
        <Meta
          title={title}
          description={`${description && description.substring(0, 40)}...`}
        />
        <div className="lead pt-2 text-center font-weight-bold font-italic">
          <span>{price} CHF</span>
        </div>
      </Card>
      {product && product.ratings && product.ratings.length > 0 ? (
        averageRating(product)
      ) : (
        <div className="text-center pt-1 pb-3 text-muted">"No rating yet"</div>
      )}
    </div>
  );
};

export default ProductCard;
