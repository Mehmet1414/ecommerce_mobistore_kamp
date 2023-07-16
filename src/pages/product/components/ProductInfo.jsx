
const ProductInfo = (props) => {
  return (
    <>
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
                                src={
                                  "https://ecommerce.udemig.dev" +
                                  props.productDetail?.images[0].path
                                }
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
                        <h2>{props.productDetail?.name} </h2>
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
                        <p>{props.productDetail?.shortDescription}</p>
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
    </>
  )
}

export default ProductInfo