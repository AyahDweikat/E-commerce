import React, { useContext, useEffect, useState } from "react";
import { FetchData } from "../../Utils/ApiUtils";
import ProductsCard from "../SubComp/ProductsCard";
import SearchFilter from "../SubComp/SearchFilter";
import { GlobalContext } from "../../Utils/Context";
import "./Products.scss";
import ProductDetailsModal from "../SubComp/ProductDetailsModal";

function ProductsFun() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const context = useContext(GlobalContext);
  useEffect(() => {
    (async () => {
      const resp = await FetchData("https://fakestoreapi.com/products", "GET");
      if (resp.status === 200) {
        setProducts(resp.data);
        setFilteredProducts(resp.data);
      } else {
        console.warn("sorry, this API failed");
        //// @TODO: we will handle it later// to work later
      }
    })();
  }, []);

  function onSearchFilterChanged(searchText, filterBy) {
    const _filteredProducts = products.filter((item) => {
      const lowercaseTitle = item.title.toLowerCase();
      const lowercaseDesc = item.description.toLowerCase();
      const lowercaseSearchText = searchText.toLowerCase();

      if (filterBy === "title") {
        return lowercaseTitle.includes(lowercaseSearchText);
      } else if (filterBy === "desc") {
        return lowercaseDesc.includes(lowercaseSearchText);
      } else {
        return (
          lowercaseTitle.includes(lowercaseSearchText) ||
          lowercaseDesc.includes(lowercaseSearchText)
        );
      }
    });
    setFilteredProducts(_filteredProducts);
  }
    function onCardClicked(product) {
      context.showModal({
        body: <ProductDetailsModal product={product} />,
        // title: <span>{product.title}</span>
      });
    }

  return (
    <div>
      <SearchFilter onChange={onSearchFilterChanged} />
      {/* the value get from searchfilter (searchText) stored in this, and psss it to the function onSearchFilterChanged */}
      <div className="row mx-5">
        {filteredProducts.map((item, idx) => {
          return (
            <div className="col-md-3 col-lg-2" key={idx}>
              <ProductsCard
                onClick={() => onCardClicked(item)}
                product={item}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProductsFun;
