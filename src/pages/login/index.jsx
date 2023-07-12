import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useApi } from "../../hook/useApi";
import { userLogin } from "../../redux/AuthSlice";

const LoginPage = () => {
  const api = useApi();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.authState.userLogin);
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
                  <li>Login</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.page-header--> */}

      {/* <!-- login-form --> */}

      <div className="content">
        <div className="container">
          <div className="box">
            <div className="row">
              <div className="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12 ">
                <div className="box-body">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12 mb20">
                      <h3 className="mb10">Login</h3>
                    </div>
                    {/* <!-- form --> */}
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const formJason = Object.fromEntries(
                          formData.entries()
                        );

                        console.log(">>>login form>>>", formJason);

                        const authResponse = await api.post(
                          "shop/authentication-token",
                          formJason,
                          {
                            headers: {
                              Accept: "application/json",
                              "Content-Type": "application/json",
                            },
                          }
                        );
                        
                        console.log("authResponse >>>", authResponse);
                        
                        dispatch(authState(authResponse));
                      }}
                    >
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="email"
                          ></label>
                          <div className="login-input">
                            <input
                              id="email"
                              name="email"
                              type="text"
                              className="form-control"
                              placeholder="Enter your email id"
                              required
                            />
                            <div className="login-icon">
                              <i className="fa fa-user"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label className="control-label sr-only"></label>
                          <div className="login-input">
                            <input
                              name="password"
                              type="password"
                              className="form-control"
                              placeholder="******"
                              required
                            />
                            <div className="login-icon">
                              <i className="fa fa-lock"></i>
                            </div>
                            <div className="eye-icon">
                              <i className="fa fa-eye"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb20 ">
                        <button className="btn btn-primary btn-block mb10">
                          Login
                        </button>
                        <div>
                          <p>
                            Have not an Acount? <Link to={"/auth/register"}>Register</Link>
                          </p>
                        </div>
                      </div>
                    </form>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                      <h4 className="mb20">Login With</h4>
                      <div className="social-media">
                        <a
                          href="#"
                          className="btn-social-rectangle btn-facebook"
                        >
                          <i className="fa fa-facebook"></i>
                          <span className="social-text">Facebook</span>
                        </a>
                        <a
                          href="#"
                          className="btn-social-rectangle btn-twitter"
                        >
                          <i className="fa fa-twitter"></i>
                          <span className="social-text">Twitter</span>{" "}
                        </a>
                        <a
                          href="#"
                          className="btn-social-rectangle btn-googleplus"
                        >
                          <i className="fa fa-google-plus"></i>
                          <span className="social-text">Google Plus</span>
                        </a>
                      </div>
                    </div>
                    {/* <!-- /.form --> */}
                  </div>
                </div>
              </div>

              {/* <!-- features --> */}
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
              {/* <!-- /.features --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.login-form --> */}
    </>
  );
};

export default LoginPage;
