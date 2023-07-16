import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RelatedProduct from "./components/ProductRelated";
import { useApi } from "../../hook/useApi";
import ProductInfo from "./components/ProductInfo";
import ProductInfoDetail from "./components/ProductInfoDetail";
import ProductReviews from "./components/ProductReviews";

const ProductDetail = () => {
  const params = useParams();
  const api = useApi();
  const [productDetail, setProductDetail] = useState(null);
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    (async () => {
      const productDetailResponce = await api.get(
        "shop/products/" + params.code
      );
      const promieses = productDetailResponce.data.variants.map(
        (variantItemString) => {
          const variantCode = variantItemString.split("/").reverse()[0];
          return api.get("shop/product-variants/" + variantCode);
        }
      );

      const variantResponces = await Promise.all(promieses);

      console.log("promieses >>>", promieses);
      setProductDetail(productDetailResponce?.data);
      setVariants(variantResponces.map((item) => item.data));
      console.log("variant >>>", variants);
    })();
  }, []);

  console.log("productDetail >>", productDetail);
  //console.log("productDetail.images >>","https://ecommerce.udemig.dev" + productDetail?.images[0].path)
  return (
    <>
      {/* page-header */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li>
                    <Link to={"/product/list"}>Product List</Link>
                  </li>
                  <li>Product Single</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.page-header*/}

      {/* product-single */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb10 alignright">
              <form>
                <div className="select-option form-group">
                
                  <select name="select" className="form-control">
                    <option value={true}>Select Size</option>
                    {variants?.map((item,index)=>(
                      <option value={true} key={index}>{item.name}</option>

                      ))}
                  </select>
                </div>
              </form>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="box">
                {/* product-description */}
                <ProductInfo productDetail={productDetail} variants={variants}  />
                
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <ProductInfoDetail productDetail={productDetail} variants={variants} />

          {/* rating reviews  */}
          <ProductReviews productDetail={productDetail} variants={variants} />
        </div>
        {/* /.product-description */}
        {/* /.product-single */}
        <RelatedProduct />
      </div>
    </>
  );
};

export default ProductDetail;
