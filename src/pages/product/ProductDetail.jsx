import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RelatedProduct from "../../components/relatedProduct";
import { useApi } from "../../hook/useApi";

const ProductDetail = () => {
  const params = useParams();
  const api = useApi();
  const [productDetail, setProductDetail] = useState(null)
  const [variant, setVariant] = useState([])

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

      const variantResponces = await Promise.all(promieses)


      console.log("promieses >>>",promieses)
      setProductDetail(productDetailResponce.data)
      console.log("productDetailResponce>>>",productDetailResponce)
      setVariant(variantResponces.map((item) => (item.data)))
      console.log("variant >>>",variant)
    })();
  }, [params.code]);
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
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="box">
                {/* product-description */}
                <div className="box-body">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                      <ul id="demo1_thumbs" className="slideshow_thumbs">
                        <li>
                          <a href="images/thumb_big_1.jpg">
                            <div className=" thumb-img">
                              <img
                                src="../public/assets/images/thumb_1.jpg"
                                alt=""
                              />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="images/thumb_big_2.jpg">
                            <div className=" thumb-img">
                              <img
                                src="../public/assets/images/thumb_2.jpg"
                                alt=""
                              />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="images/thumb_big_3.jpg" alt="">
                            <div className=" thumb-img">
                              <img
                                src="../public/assets/images/thumb_3.jpg"
                                alt=""
                              />
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <div id="slideshow" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="product-single">
                        <h2>Google Pixel </h2>
                        <div className="product-rating">
                          <span>
                            <i className="fa fa-star" />
                          </span>
                          <span>
                            <i className="fa fa-star" />
                          </span>
                          <span>
                            <i className="fa fa-star" />
                          </span>
                          <span>
                            <i className="fa fa-star" />
                          </span>
                          <span>
                            <i className="fa fa-star-o" />
                          </span>
                          <span className="text-secondary">
                            (4.8 Review Stars)
                          </span>
                        </div>
                        <p className="product-price" style={{ fontSize: 38 }}>
                          $1100 <strike>$1300</strike>
                        </p>
                        <p>
                          12.2 MP Rear | 8 MP Front Camera, 4GB RAM, 2700 mAh
                          battery, Android 8.0, Qualcomm Snapdragon 835,
                          Fingerprint Sensor
                        </p>
                        <div className="product-quantity">
                          <h5>Quantity</h5>
                          <div className="quantity mb20">
                            <input
                              type="number"
                              className="input-text qty text"
                              step="1"
                              min="1"
                              max="6"
                              name="quantity"
                              value="1"
                              title="Qty"
                              size={4}
                              pattern="[0-9]*"
                            />
                          </div>
                        </div>
                        <button type="submit" className="btn btn-default">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="box-head scroll-nav">
                <div className="head-title">
                  {" "}
                  <a className="page-scroll active" href="#product">
                    Product Details
                  </a>
                  <a className="page-scroll" href="#rating">
                    Ratings & Reviews
                  </a>
                  <a className="page-scroll" href="#review">
                    Add Your Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* highlights */}
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="box" id="product">
                <div className="box-body">
                  <div className="highlights">
                    <h4 className="product-small-title">Highlights</h4>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <ul className="arrow">
                          <li>12.2 MP Rear | 8 MP Front Camera </li>
                          <li>4GB RAM </li>
                          <li>2700 mAh battery</li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <ul className="arrow">
                          <li>Android 8.0 </li>
                          <li>Qualcomm Snapdragon 835</li>
                          <li>Fingerprint Sensor</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="highlights">
                    <h4 className="product-small-title">Specification</h4>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4>General</h4>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb30">
                        <ul>
                          <li>Brand</li>
                          <li>Model Number </li>
                          <li>Body Material</li>
                          <li>Sim Size</li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb30">
                        <ul>
                          <li style={{ color: "#1c1e1e" }}>Google Pixel </li>
                          <li style={{ color: "#1c1e1e" }}>Google XYZ</li>
                          <li style={{ color: "#1c1e1e" }}>
                            Metal and Polycarbonate
                          </li>
                          <li style={{ color: "#1c1e1e" }}>Micro</li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4>Display</h4>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <ul>
                          <li>Screen Size </li>
                          <li>Display Resolution </li>
                          <li>Pixel Density</li>
                          <li>Screen Protection </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <ul>
                          <li style={{ color: "#1c1e1e" }}>5 inch </li>
                          <li style={{ color: "#1c1e1e" }}>
                            1280 X 720 Pixels
                          </li>
                          <li style={{ color: "#1c1e1e" }}>294 PPI</li>
                          <li style={{ color: "#1c1e1e" }}>Gorilla Glass 4</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* rating reviews  */}
          <div id="rating">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="box">
                  <div className="box-head">
                    <h3 className="head-title">Rating & Reviews</h3>
                  </div>
                  <div className="box-body">
                    <div className="row">
                      <div className="rating-review">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <h1>4.8</h1>
                          <div className="product-rating">
                            <span>
                              <i className="fa fa-star" />
                            </span>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                            <span>
                              <i className="fa fa-star-o" />
                            </span>
                          </div>
                          <p className="text-secondary">
                            20 Ratings & 10 Reviews
                          </p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <h2>80%</h2>
                          <p className="text-secondary">
                            Based on 20 Recommendations.
                          </p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <h4>Have you used this product?</h4>
                          <a href="#" className="btn btn-primary btn-sm">
                            review
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.rating reviews  */}
            {/* customers review  */}
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="box">
                  <div className="box-head">
                    <h3 className="head-title">Customer Reviews</h3>
                  </div>
                  <div className="box-body">
                    <div className="row">
                      <div className="customer-reviews">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="product-rating">
                            <span>
                              <i className="fa fa-star" />
                            </span>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                            <span>
                              <i className="fa fa-star-o" />
                            </span>
                          </div>
                          <p className="reviews-text">
                            By{" "}
                            <span className="text-default">Michael Byrd</span>{" "}
                            on 14 August 2017{" "}
                          </p>
                          <p>
                            Mauris aliquet augue seenim finibusat consectetur
                            metus congutiam convallis aliquam conguen ornare
                            exdolornon scelerisque nisl fringilla ut. Maecenas
                            faucibus purus id elementum laoreen a hendrerit
                            ested laoreet nibh vel lacus sagittis, eu laoreet
                            metus viverraed rutrum.
                          </p>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="divider-line" />
                        </div>
                      </div>
                      <div className="customer-reviews">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="product-rating">
                            <span>
                              <i className="fa fa-star" />
                            </span>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                            <span>
                              <i className="fa fa-star-o" />
                            </span>
                          </div>
                          <p className="reviews-text">
                            By <span className="text-default">Marc Scott</span>{" "}
                            on 13 August 2017{" "}
                          </p>
                          <p>
                            Vivamus molestie enim ut libero condimentumvel
                            malesuada mivulpuorem ipsum dolor sitamet
                            consectetur adipiscing elinec semper orcinec
                            ultricies ultricieunc velitest variussed suscipit
                            sed dignissim acanteras aliquet magna ipsum dictum
                            vulputate dolor suscipit non.{" "}
                          </p>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="divider-line" />
                        </div>
                      </div>
                      <div className="customer-reviews">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="product-rating">
                            <span>
                              <i className="fa fa-star" />
                            </span>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                            <span>
                              <i className="fa fa-star-o" />
                            </span>
                          </div>
                          <p className="reviews-text">
                            By{" "}
                            <span className="text-default">
                              William Cassidy
                            </span>{" "}
                            on 13 August 2017{" "}
                          </p>
                          <p>
                            Suspendisse viverra nibh vel mattis aliqueroin
                            ultricies vitaeex quis sceleriuisque eleifend
                            convallis leoorbi ultricies turpis nullanec accumsan
                            mi molestie nonaecenas cursus massa quis condimentum
                            venenati uspendisse idmassaut lacus dignissim
                            vestibuonec malesuada ultricies euismod.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* customers review  */}
            {/* reviews-form */}
            <div id="review">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="box">
                    <div className="box-head">
                      <h3 className="head-title">Add A Reviews</h3>
                    </div>
                    <div className="box-body">
                      <div className="row">
                        <div className="review-form">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="review-rating">
                              <h5>Your Rating : </h5>
                              <div className="star-rate" id="rateYo" />
                            </div>
                          </div>
                          <form>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label
                                  className="control-label sr-only "
                                  htmlFor="name"
                                />
                                <input
                                  id="name"
                                  type="text"
                                  className="form-control"
                                  placeholder="Name"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label
                                  className="control-label sr-only "
                                  htmlFor="email"
                                />
                                <input
                                  id="email"
                                  type="text"
                                  className="form-control"
                                  placeholder="Email"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label
                                  className="control-label sr-only "
                                  htmlFor="textarea"
                                />
                                <textarea
                                  className="form-control"
                                  id="textarea"
                                  name="textarea"
                                  rows={4}
                                  placeholder="Enter your Reviews"
                                />
                              </div>
                              <button
                                id="submit"
                                name="singlebutton"
                                className="btn btn-primary"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.reviews-form */}
          </div>
        </div>
        {/* /.product-description */}
        {/* /.product-single */}
        <RelatedProduct />
      </div>
    </>
  );
};

export default ProductDetail;
