import { Link } from "react-router-dom";

const ContactUs = () => {
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
                  <li>Contact</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.page-header*/}
      <>
        {/* contact-form */}
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="box">
                  <div className="box-head">
                    <h2 className="head-title">Contact Us</h2>
                  </div>
                  <div className="box-body contact-form">
                    <div className="row">
                      <form>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label
                              className="control-label sr-only"
                              htmlFor="name"
                            />
                            <input
                              id="name"
                              type="text"
                              placeholder="Your  Name"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label
                              className="control-label sr-only"
                              htmlFor="phone"
                            />
                            <input
                              id="phone"
                              type="text"
                              placeholder="Enter your Mobile Number"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label
                              className="control-label sr-only"
                              htmlFor="email"
                            />
                            <input
                              id="email"
                              type="text"
                              placeholder="Enter Email Address"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label
                              className="control-label sr-only"
                              htmlFor="name"
                            />
                            <input
                              id="subject"
                              type="text"
                              placeholder="Your Subject"
                              className="form-control"
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
                              placeholder="Messages"
                            />
                          </div>
                          <button
                            type="submit"
                            name="singlebutton"
                            className="btn btn-primary"
                          >
                            submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.contact-form */}

              <>
                {/* address-block */}
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="box">
                    <div className="box-head">
                      <h2 className="head-title">Contact Info</h2>
                    </div>
                    <div className="box-body">
                      <div className="contact-block">
                        <h4>Corporate Headquater</h4>
                        <p>3718 Pretty View Lane Santa Rosa, CA 95401</p>
                      </div>
                      <div className="contact-block">
                        <h4>Sales Info & Inquiries</h4>
                        <p className="mb0">
                          Toll Free:{" "}
                          <span className="text-default">180-456-8910</span>
                        </p>
                        <p className="mb0">
                          Email:{" "}
                          <span className="text-default">
                            help@mobistore.com
                          </span>
                        </p>
                      </div>
                      <div className="contact-block">
                        <h4>General Contact</h4>
                        <p className="mb0">
                          Phone:{" "}
                          <span className="text-default">180-123-4567</span>
                        </p>
                        <p className="mb0">
                          Email:{" "}
                          <span className="text-default">
                            demo@mobistore.com
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.address-block */}
              </>
            </div>

            <>
              {/* support-block */}
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="box">
                    <div className="box-head">
                      <h3 className="head-title">How Can We Help You?</h3>
                    </div>
                    <div className="box-body">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div className="suport-block">
                            <div className="support-icon">
                              <img src="../public/assets/images/inquiry_icon.png" alt="" />
                            </div>
                            <div className="support-content">
                              <h4>Sales Inquiry</h4>
                              <p>
                                Suspendisse sodales venenatis velitut fringilla
                                lorem on vulputateam augue nislpretium
                                qutristique sodales serotut fringilla.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div className="suport-block">
                            <div className="support-icon">
                              <img src="../public/assets/images/support_icon.png" alt="" />
                            </div>
                            <div className="support-content">
                              <h4>Customer Support</h4>
                              <p>
                                Pendisse sodales venenatis velitut fringilla
                                lorem on vulputateam augue nislpretium
                                qutristique sodales seron magna.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* /.support-block */}
            </>
            <>
              {/* contact-map */}
              <div id="contact-map">


              </div>
              {/* /.contact-map */}
            </>
          </div>
        </div>
      </>
    </>
  );
};

export default ContactUs;
