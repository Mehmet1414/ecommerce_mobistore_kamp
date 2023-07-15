import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useApi } from "../../hook/useApi";

const RegisterPage = () => {
  const api = useApi();
  const dispatch = useDispatch();
  const customerState = useSelector((state) => state.customerState);
  return (
    <>
      {/* <!-- page-header --> */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>signup form</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.page-header--> */}

      {/* <!-- sign-up form --> */}
      <div className="content">
        <div className="container">
          <div className="box sing-form">
            <div className="row">
              <div className="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12 ">
                {/* <!-- form --> */}
                <div className="box-body">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12 mb20">
                      <h3 className="mb10">Create Your Account</h3>
                      <p>Please fill all Resgister form Fields Below. </p>
                    </div>
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());

                        console.log("formJson>>>", formJson);

                        const customerResponce = await api.post(
                          "shop/customers",
                          formJson,
                          {
                            headers: {
                              Accept: "*/*",
                              "Content-Type": "application/json",
                            },
                          }
                        );
                        console.log(
                          ">>>registerResponce >> ",
                          customerResponce
                        );
                        dispatch(customerState(customerResponce));
                      }}
                    >
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="name"
                          ></label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="phone"
                          ></label>
                          <input
                            id="surname"
                            name="surname"
                            type="text"
                            className="form-control"
                            placeholder=" Enter Your SurName"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="email"
                          ></label>
                          <input
                            id="email"
                            name="emaol"
                            type="text"
                            className="form-control"
                            placeholder="Enter your email id"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label  sr-only"
                            htmlFor="password"
                          ></label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="create your password"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <button className="btn btn-primary btn-block mb10">
                          Register
                        </button>
                        <div>
                          <p>
                            Have an Acount?{" "}
                            <Link to={"/auth/login"}>Login</Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*  <!-- /.form --> */}
                </div>
              </div>
              {/* features */}
              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 ">
                <div className="box-body">
                  <div className="feature-left">
                    <div className="feature-icon">
                      <img
                        src="../public/assets/images/feature_icon_1.png"
                        alt=""
                      />
                    </div>
                    <div className="feature-content">
                      <h4>Loyalty Points</h4>
                      <p>
                        Aenean lacinia dictum risvitae pulvinar disamer
                        seronorem ipusm dolor sit manert.
                      </p>
                    </div>
                  </div>
                  <div className="feature-left">
                    <div className="feature-icon">
                      <img
                        src="../public/assets/images/feature_icon_2.png"
                        alt=""
                      />
                    </div>
                    <div className="feature-content">
                      <h4>Instant Checkout</h4>
                      <p>
                        Aenean lacinia dictum risvitae pulvinar disamer
                        seronorem ipusm dolor sit manert.
                      </p>
                    </div>
                  </div>
                  <div className="feature-left">
                    <div className="feature-icon">
                      <img
                        src="../public/assets/images/feature_icon_3.png"
                        alt=""
                      />
                    </div>
                    <div className="feature-content">
                      <h4>Exculsive Offers</h4>
                      <p>
                        Aenean lacinia dictum risvitae pulvinar disamer
                        seronorem ipusm dolor sit manert.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.features */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
