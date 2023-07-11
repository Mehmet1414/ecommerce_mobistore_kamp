import { Link } from "react-router-dom";

const BlogDefault = () => {
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
                  <li>Blog Default</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.page-header*/}
      {/* blog */}
      <div className="space-medium">
        <div className="container">
          <div className="row">
            <div className="isotope">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 post-masonry ">
                <div className="post-block">
                  <h3 className="post-title">
                    <a href="#" className="title">
                      E-Commerce Free Template
                    </a>
                  </h3>
                  <div className="meta">
                    <span className="meta-date">20 December, 2020</span>
                    <span>|{"   "}</span>
                    <span className="meta-admin">
                      By{" "}
                      <a href="#" className="meta-title">
                        Admin
                      </a>
                    </span>
                  </div>
                  <div className="post-img">
                    <Link to={"/blog/detail"} className="imghover">
                      <img
                        src="../public/assets/images/post_img_1.jpg"
                        alt=""
                        className="img-responsive"
                      />
                    </Link>
                  </div>
                  <div className="post-content">
                    <p>
                      Etiased lorem sapiuis pharetra edexin fringliam acpurus
                      semrbi non magna id ipsmm...
                    </p>
                    <a href="#" className="btn btn-primary btn-sm">
                      read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 post-masonry">
                <div className="post-block ">
                  {/* post block */}
                  <h3 className="post-title">
                    <a href="#" className="title">
                      Online Mobile Store E-Commerce Free Template
                    </a>
                  </h3>
                  <div className="meta">
                    <span className="meta-date">19 December, 2020</span>
                    <span>|{"   "}</span>
                    <span className="meta-admin">
                      By{" "}
                      <a href="#" className="meta-title">
                        Admin
                      </a>
                    </span>
                  </div>
                  <div className="post-img">
                    <Link to={"/blog/detail"} className="imghover">
                      <img
                        src="../public/assets/images/post_img_2.jpg"
                        alt=""
                        className="img-responsive"
                      />
                    </Link>
                  </div>
                  <div className="post-content">
                    <p>
                      Nullam acdui utnisl interdum mattisut nonese maurisauris
                      gravida auctor dignissim.
                    </p>
                    <a href="#" className="btn btn-primary btn-sm">
                      read more
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 post-masonry">
                <div className="post-block">
                  {/* post block */}
                  <h3 className="post-title">
                    <a href="#" className="title">
                      E-Commerce Free Template
                    </a>
                  </h3>
                  <div className="meta">
                    <span className="meta-date">18 December, 2020</span>
                    <span>|{"   "}</span>
                    <span className="meta-admin">
                      By{" "}
                      <a href="#" className="meta-title">
                        Admin
                      </a>
                    </span>
                  </div>
                  <div className="post-img">
                    <a href="#" className="imghover">
                      <img
                        src="../public/assets/images/post_img_3.jpg"
                        alt=""
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <p>
                      Etiased lorem sapiuis pharetra edexin fringliam acpurus
                      semrbi non magna id ipsmm...
                    </p>
                    <a href="#" className="btn btn-primary btn-sm">
                      read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12  post-masonry ">
                <div className="post-block">
                  {/* post block */}
                  <h3 className="post-title">
                    <a href="#" className="title">
                      Planning for Online Mobile Shopping? Visit us
                    </a>
                  </h3>
                  <div className="meta">
                    <span className="meta-date">17 December, 2020</span>
                    <span>|{"   "}</span>
                    <span className="meta-admin">
                      By{" "}
                      <a href="#" className="meta-title">
                        Admin
                      </a>
                    </span>
                  </div>
                  <div className="post-img">
                    <a href="#" className="imghover">
                      <img
                        src="../public/assets/images/post_img_1.jpg"
                        alt=""
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <p>
                      Aenean fringillaest euismod exdictum viverra Interdumet
                      malesuada famesace.
                    </p>
                    <a href="#" className="btn btn-primary btn-sm">
                      read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12  post-masonry">
                <div className="post-block">
                  {/* post block */}
                  <h3 className="post-title">
                    <a href="#" className="title">
                      Online Mobile Store
                    </a>
                  </h3>
                  <div className="meta">
                    <span className="meta-date">16 December, 2020</span>
                    <span>|{"   "}</span>
                    <span className="meta-admin">
                      By{" "}
                      <a href="#" className="meta-title">
                        Admin
                      </a>
                    </span>
                  </div>
                  <div className="post-img">
                    <a href="#" className="imghover">
                      <img
                        src="../public/assets/images/post_img_2.jpg"
                        alt=""
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <p>
                      Curabitur auctor lectus magnaac faucibus one mauris
                      finibus tateget interdum erose.{" "}
                    </p>
                    <a href="#" className="btn btn-primary btn-sm">
                      read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 post-masonry">
                <div className="post-block">
                  {/* post block */}
                  <h3 className="post-title">
                    <a href="#" className="title">
                      Mobile Phones Online Shopping
                    </a>
                  </h3>
                  <div className="meta">
                    <span className="meta-date">15 December, 2020</span>
                    <span>|{"   "}</span>
                    <span className="meta-admin">
                      By{" "}
                      <a href="#" className="meta-title">
                        Admin
                      </a>
                    </span>
                  </div>
                  <div className="post-img">
                    <a href="#" className="imghover">
                      <img
                        src="../public/assets/images/post_img_3.jpg"
                        alt=""
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <p>
                      Etiased lorem sapiuis pharetra edexin fringliam acpurus
                      semrbi non magna id ipsmm...
                    </p>
                    <a href="#" className="btn btn-primary btn-sm">
                      read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="st-pagination">
              <ul className="pagination">
                <li>
                  <a href="#" aria-label="previous">
                    <span aria-hidden="true">Previous</span>
                  </a>{" "}
                </li>
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  {" "}
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">Next</span>
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* blog */}
    </>
  );
};

export default BlogDefault;
