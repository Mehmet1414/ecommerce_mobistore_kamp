import { Link } from "react-router-dom";

const CheckOut = () => {
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
                    <Link to={"/product/list"}>product list</Link>
                  </li>
                  <li>
                    <Link to={"/product/detail"}>product single</Link>
                  </li>
                  <li>
                    <Link to={"/cart"}>cart</Link>
                  </li>
                  <li>checkout</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.page-header*/}

      {/* checkout */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
              <div className="box checkout-form">
                {/* checkout - form */}
                <div className="box-head">
                  <h2 className="head-title">Your Detail</h2>
                </div>
                <div className="box-body">
                  <div className="row">
                    <form>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="name"
                          />
                          <input
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Enter Your First NAme"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="name"
                          />
                          <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Enter Your last NAme"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="text"
                            className="form-control"
                            placeholder="Enter Email Address"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="phone"
                          />
                          <input
                            id="phone"
                            name="phone"
                            type="text"
                            className="form-control"
                            placeholder="Enter Mobile Number"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label className="control-label sr-only"> </label>
                          <select
                            name="country name"
                            className="form-control"
                            required
                          >
                            <option value={true}>India</option>
                            <option value="1">United Kingdom</option>
                            <option value="2">United States of America</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label className="control-label sr-only" />
                          <input
                            name="phone"
                            type="text"
                            className="form-control"
                            placeholder="street Address"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label className="control-label sr-only"> </label>
                          <select
                            name="city name"
                            className="form-control"
                            required
                          >
                            <option value={true}>Ahmedabad</option>
                            <option value="1">Mumbai</option>
                            <option value="2">Surat</option>
                            <option value="3">Banglore</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label className="control-label sr-only " />
                          <select
                            name="state name"
                            className="form-control"
                            required
                          >
                            <option value={true}>Gujarat</option>
                            <option value="1">Maharashtra</option>
                            <option value="2">Rajasthan</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label className="control-label sr-only" />
                          <input
                            name="postcode"
                            type="text"
                            className="form-control"
                            placeholder="Enter Your zipcode"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="textarea"
                          />
                          <textarea
                            className="form-control"
                            id="textarea"
                            name="textarea"
                            rows={4}
                            placeholder="Notes About Your Order"
                          />
                        </div>
                        <button className="btn btn-primary ">
                          Procced to Payment
                        </button>
                        <div className="checkbox alignright mt20">
                          <label>
                            <input type="checkbox" value={true} />
                            <span>Create An Account?</span>
                          </label>
                        </div>
                      </div>
                    </form>
                    {/* /.checkout-form */}
                  </div>
                </div>
              </div>
            </div>
            {/* product total */}
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box mb30">
                <div className="box-head">
                  <h3 className="head-title">Your Order</h3>
                </div>
                <div className="box-body">
                  <div className="table-responsive">
                    {/* product total */}

                    <div className="pay-amount ">
                      <table className="table mb20">
                        <thead
                          className=""
                          style={{
                            borderBottom: "1px solid #e8ecf0",
                            textTransform: "uppercase",
                          }}
                        >
                          <tr>
                            <th>
                              <span>Product</span>
                            </th>
                            <th>
                              <span>Total</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>
                              <span>Google Pixle X 1</span>
                            </th>
                            <td>$2400</td>
                          </tr>
                          <tr>
                            <th>
                              <span>Apple iPhone 6S X 1 </span>
                            </th>
                            <td>$1300</td>
                          </tr>
                          <tr>
                            <th>
                              <span>Sub Total </span>
                            </th>
                            <td>$2400</td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <th>
                              <span>Amount Payable</span>
                            </th>
                            <td>$2400</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /.product total */}
                  </div>
                </div>
              </div>
              {/* place order */}
              <div className="box">
                <div className="box-head">
                  <h3 className="head-title">Check Payment</h3>
                </div>
                <div className="box-body">
                  <p>
                    Please send a check to Store Name, Store Street, Store Town,
                    Store State / County, Store Postcode.
                  </p>
                  <button className="btn btn-default btn-block">
                    Place Order
                  </button>
                </div>
              </div>
              {/* /.place order */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
