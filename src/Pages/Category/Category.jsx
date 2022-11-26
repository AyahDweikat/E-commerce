import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FetchData } from "../../Utils/ApiUtils";
import { mapCategory } from "./../../Utils/utils";
import "./Category.scss";

function Category() {
  const [categories, setCategories] = useState([]);
  // const [categoryName, setCategoryName ] = useState([]);
  // const [category, setCategory ] = useState([{name:"", image:""}]);
  // const [image, setImage] = useState([]);

  async function getCategories() {
    const resp = await FetchData(
      "https://fakestoreapi.com/products/categories",
      "GET"
    );
    const mappedCategories = mapCategory(resp.data);
    if (resp.status === 200) {
      setCategories(mappedCategories);
      // console.log(mappedCategories);
    } else {
      console.warn("sorry, this API failed");
      //// @TODO: we will handle it later// to work later
    }
  }
  // const location = useLocation();
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="product-categories">
      {categories.map((category, idx) => {
        return (
          <div key={idx}>
            <Link to={`/product?category=${category.name}`}>
              <div className={"card container my-5"}>
                <img src={category.image} alt={category.name} />
                <div
                  className={`card-img-overlay 
            custom-img-overlay
            d-flex justify-content-center 
            align-items-center`}
                >
                  {category.label}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Category;

