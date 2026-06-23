import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductGrid = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products');
        if (response.data && Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
     {/* Best Selling Products */}
      <section className="products-carousel container">
        <h2
          className="section-title text-center fw-normal text-uppercase mb-1 mb-md-3 pb-xl-3"
        >
          Best Selling Products
        </h2>

        {/* Tab Navigation */}
        <ul
          className="nav nav-tabs mb-3 pb-3 mb-xl-4 text-uppercase justify-content-center"
          id="collections-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore active"
              id="collections-tab-1-trigger"
              data-bs-toggle="tab"
              href="#collections-tab-1"
              role="tab"
              aria-controls="collections-tab-1"
              aria-selected="true"
              >All</a>
            
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore"
              id="collections-tab-2-trigger"
              data-bs-toggle="tab"
              href="#collections-tab-2"
              role="tab"
              aria-controls="collections-tab-2"
              aria-selected="true"
              >Featured</a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore"
              id="collections-tab-3-trigger"
              data-bs-toggle="tab"
              href="#collections-tab-3"
              role="tab"
              aria-controls="collections-tab-3"
              aria-selected="true"
              >Best Seller</a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore"
              id="collections-tab-4-trigger"
              data-bs-toggle="tab"
              href="#collections-tab-4"
              role="tab"
              aria-controls="collections-tab-4"
              aria-selected="true"
              >Sales</a>
          </li>
        </ul>
        {/* Tab Navigation End */}

        <div className="tab-content pt-2" id="collections-tab-content">
          <div
            className="tab-pane fade show active"
            id="collections-tab-1"
            role="tabpanel"
            aria-labelledby="collections-tab-1-trigger">
            <div className="row">

              {/* Single ProductGridCard Start */}
              {products.map((product, index) => (
                <ProductCard 
                key={index} 
                id={product.id} 
                title={product.name} 
                image={product.image} 
                price={product.price} 
                category={product.category} />
              ))}
              {/* Single ProductGridCard End */}

            </div>
            {/* /.row */}
            <div className="text-center mt-2">
              <Link
                className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
                to="shop1.html"
              >
                See All Products
              </Link>
            </div>
          </div>
          {/* /.tab-pane fade show */}
           
        </div>
        {/* /.tab-content pt-2 */}
      </section>
    </>
  )
}

export default ProductGrid