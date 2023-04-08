import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { FetchData } from "../../Utils/ApiUtils";
import { mapCategory } from "./../../Utils/utils";
import "./Category.scss";

function Category() {
  const [categories, setCategories] = useState([]);
  const _categories = useLoaderData()
  // console.log(dataLoaded);
  useEffect(() => {
    setCategories(_categories);
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

