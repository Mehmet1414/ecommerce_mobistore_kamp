import { Link } from "react-router-dom";

const CartPage = () => {
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
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/product/list"}>Product List</Link>
                  </li>
                  
                  <li>Cart</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.page-header*/}
      {/* cart-section */}
      <div className="space-medium">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
              <div className="box">
                <div className="box-head">
                  <h3 className="head-title">My Cart (02)</h3>
                </div>
                {/* cart-table-section */}
                <div className="box-body">
                  <div className="table-responsive">
                    <div className="cart">
                      <table className="table table-bordered ">
                        <thead>
                          <tr>
                            <th>
                              <span>Item</span>
                            </th>
                            <th>
                              <span>Price</span>
                            </th>
                            <th>
                              <span>Quantity</span>
                            </th>
                            <th>
                              <span>Total</span>
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="#">
                                <img src="../public/assets/images/cart_product_1.png" alt="" />
                              </a>
                              <span>
                                <a href="#">Google Pixle</a>
                              </span>
                            </td>
                            <td>$1100</td>
                            <td>
                              <div className="product-quantity">
                                <div className="quantity">
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
                            </td>
                            <td>$1100.00</td>
                            <th scope="row">
                              <a href="#" className="btn-close">
                                <i className="fa fa-times-circle-o" />
                              </a>
                            </th>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">
                                <img src="../public/assets/images/cart_product_2.png" alt="" />
                              </a>
                              <span>
                                <a href="#">Apple iPhone 6S </a>
                              </span>
                            </td>
                            <td>$1300</td>
                            <td>
                              <div className="product-quantity">
                                <div className="quantity">
                                  <input
                                    type="number"
                                    className="input-text qty text "
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
                            </td>
                            <td>$1300.00</td>
                            <th scope="row">
                              <a href="#" className="btn-close">
                                <i className="fa fa-times-circle-o" />
                              </a>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /.cart-table-section */}
                  </div>
                </div>
              </div>
              <Link to={"/product/list"} className="btn-link">
                <i className="fa fa-angle-left" /> back to shopping
              </Link>
            </div>
            {/* cart-total */}
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box mb30">
                <div className="box-head">
                  <h3 className="head-title">Price Details</h3>
                </div>
                <div className="box-body">
                  <div className=" table-responsive">
                    <div className="pay-amount ">
                      <table className="table mb20">
                        <tbody>
                          <tr>
                            <th>
                              <span>Price (2 items)</span>
                            </th>
                            <td>$2400</td>
                          </tr>
                          <tr>
                            <th>
                              <span>Delivery Charges</span>
                            </th>
                            <td>
                              <strong className="text-green">Free</strong>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <th>
                              <span
                                className="mb0"
                                style={{ fontWeight: "700" }}
                              >
                                Amount Payable
                              </span>
                            </th>
                            <td style={{ fontWeight: "700", color: "#1c1e1e" }}>
                              $2400
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <button className="btn btn-primary btn-block">
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
              {/* coupon-section */}
              <div className="box mb30">
                <div className="box-head">
                  <h3 className="head-title">Coupons & Offers</h3>
                </div>
                <div className="box-body">
                  <form>
                    <div className="coupon-form">
                      <input
                        type="text"
                        name="coupon_code"
                        className="form-control"
                        id="coupon_code"
                        value={true}
                        placeholder="Coupon code"
                      />
                      <input
                        type="submit"
                        className="btn btn-primary btn-block"
                        name="apply_coupon"
                        value="Apply coupon"
                      />
                    </div>
                  </form>
                </div>
              </div>
              {/* /.coupon-section */}
            </div>
          </div>
          {/* /.cart-total */}
        </div>
      </div>
      {/* /.cart-section */}
    </>
  );
};

export default CartPage;
