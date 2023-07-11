import { Link } from "react-router-dom";

const BlogDetail = () => {
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
                  <li>Blog Detail</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.page-header*/}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
              <div className="row">
                <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12">
                  <div className="post-block ">
                    {/* post block */}
                    <div className="post-content">
                      <h2 className="post-title">E-Commerce Free Template</h2>
                      <div className="meta">
                        <span className="meta-date">December 25,2020</span>
                        <span>| {" "}</span>
                        <span className="meta-admin">
                          By{" "}
                          <a href="#" className="meta-title">
                            Admin
                          </a>
                        </span>
                        <span>|{" "}</span>
                        <span className="meta-comments">comments 04</span>
                      </div>
                      <div className="post-img">
                        <img
                          src="../public/assets/images/post_big_img_1.jpg"
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                      <p>
                        Phasellus vehicula metus ligula, et aliquam massa
                        eleifend nonaurisac lectus vehicula nisl suscipit
                        sagittis raesent sed mi convallis pulvinaex aclobortis
                        risuurabitur laoreet tellus et feugiat viverra magnanisi
                        pretium nequenon aliquamarcu dolor in nuci varius
                        natoque penatibusete.
                        <br />
                        <br /> Etiam sed lorem sapieuis pharetrasedx in
                        frinliquam acpurus semorbi nonmagna idipsum lacinia
                        vehicula isnt egetut orcuspendisse malesuada tempus
                        liberosed tinciduntnisi pulvinar auisque finibus
                        molestie congue one etiam bibendum id magna nec
                        iaculiuisque tempor purus sed elit dapibus consectetu
                        fermentum elementums turpis sed ornarerci varius natoque
                        penatibuset magnis dis parturient montes nascetue.
                      </p>
                      <div className="mb40">
                        <img
                          src="../public/assets/images/right_img.jpg"
                          alt=""
                          className="alignright"
                        />
                        <p>
                          {" "}
                          Aliquam idnisi consectetur auctor libero sagittis,
                          tempor elituspendisse sit amet justo pulvinar eleifend
                          nulla Praesent vel aliquet urnaauris loremi pum dolsor
                          sit molestie sollicitudin nisl non volutpatm mollis
                          sit amet elefied nullas.{" "}
                        </p>
                        <p>
                          Eros lacusac lorem tristique arcu facilisisquislacinia
                          eratn lacinia Praesent vel aliquet urnaauris molestie
                          sollicitudin nisl non volutp risus lorem ipusm lorem
                          ipusm dolor sit famese gestas.{" "}
                        </p>
                      </div>
                      <img
                        src="../public/assets/images/left_img.jpg"
                        alt=""
                        className="alignleft"
                      />
                      <p className="mb30">
                        {" "}
                        Consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.tristique
                        arcu nisidapibus justo viverrasit amet sodales risus
                        lorem ipusm lorem ipusm doidapibus justo
                      </p>
                      <p>
                        Viverrasit amet sodales risus lorem ipusm lorem ipusm
                        dolor sit famese gest fugi tempor elitusifend nulla
                        quislac Eros lacusaccinia eratn lacinia moac lorem
                        tristique arcu.{" "}
                      </p>
                      {/* related post block */}
                    </div>
                  </div>
                  <div className="related-post">
                    <div className="row">
                      <div className="col-lg-12 col-sm-12 col-md-12 col-sm-12">
                        <div className="related-head">
                          <h3 className="related-post-title mb30">
                            Related Posts
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="related-post-block">
                      <div className="row">
                        <div className="col-lg-4 col-sm-4 col-md-4 col-xs-12">
                          <div className="related-post-content">
                            {/* related post */}
                            <div className="related-img">
                              <a href="#" className="imghover">
                                <img
                                  src="../public/assets/images/related_post_1.jpg"
                                  alt=""
                                  className="img-responsive"
                                />
                              </a>
                            </div>
                            <h4 className="related-title">
                              <a href="#" className="title">
                                E-Commerce Free Template
                              </a>
                            </h4>
                            <div className="meta post-meta">
                              in{" "}
                              <a href="#" className="">
                              {"\"free template\""}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-md-4 col-xs-12">
                          <div className="related-post-content">
                            {/* related post */}
                            <div className="related-img">
                              <a href="#" className="imghover">
                                <img
                                  src="../public/assets/images/related_post_2.jpg"
                                  alt=""
                                  className="img-responsive"
                                />
                              </a>
                            </div>
                            <h4 className="related-title">
                              <a href="#" className="title">
                                Online Mobile Store
                              </a>
                            </h4>
                            <div className="meta post-meta">
                              in{" "}
                              <a href="#" className="">
                                 {"\"eccommerce template\""}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-md-4 col-xs-12">
                          <div className="related-post-content">
                            {/* related post */}
                            <div className="related-img">
                              <a href="#" className="imghover">
                                <img
                                  src="../public/assets/images/related_post_3.jpg"
                                  alt=""
                                  className="img-responsive"
                                />
                              </a>
                            </div>
                            <h4 className="related-title">
                              <a href="#" className="title">
                                E-Commerce Free Template
                              </a>
                            </h4>
                            <div className="meta post-meta">
                              in{" "}
                              <a href="#" className="">
                                {"\"free template\""}
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* /.related post */}
                      </div>
                    </div>
                  </div>
                  {/* /.related post block */}
                  <div className="post-navigation">
                    {/* post navigation */}
                    <div className="row">
                      <div className="nav-links">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 nopr">
                          <div className="nav-previous">
                            {/* nav previous */}
                            <div className="prev-link">
                              {" "}
                              <a href="#">previous post</a>
                            </div>
                            <h3 className="previous-next-title">
                              <a href="#" className="title">
                                E-Commerce Free Template
                              </a>
                            </h3>
                          </div>
                          {/* /. nav previous */}
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12 nopl">
                          <div className="nav-next text-right">
                            {/* nav next */}
                            <div className="next-link">
                              <a href="#">next post</a>
                            </div>
                            <h3 className="previous-next-title">
                              <a href="#" className="title">
                                Online Mobile Store
                              </a>
                            </h3>
                          </div>
                          {/* /.nav previous */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /. post navigation */}
                  <div className="author-block">
                    <div className="author-head">
                      <h3 className="author-title">Author Post</h3>
                    </div>
                    {/* Post author */}
                    <div className="author-content">
                      <div className="author-img">
                        <a href="#">
                          <img src="../public/assets/images/author.jpg" alt="" />
                        </a>
                      </div>
                      <div className="author-header">
                        <h4>
                          <a href="#">Leonard Thomson</a>
                        </h4>
                      </div>
                      <p>
                        Vestibulum pellentesque sitamet arcuporttitor maxi
                        hasellus pellentesques turpisat auctor volutporbi
                        nuncaugue suscipit nonest sed ullamcorper porta
                        duaecenas elementum egestas suscipitn elementum.
                      </p>
                      <a href="#" className="btn btn-primary btn-sm">
                        View All Post
                      </a>{" "}
                    </div>
                  </div>
                  {/* /.post author */}
                  {/*comments start*/}
                  <div className="comment-area">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="">
                          <div className="comment-head">
                            <h3 className="comment-heading">Comments (03)</h3>
                          </div>
                        </div>
                        <ul className="comment-list">
                          <li>
                            <div className="comment-author">
                              {" "}
                              <img
                                src="../public/assets/images/user_img_1.jpg"
                                alt=""
                                className="img-circle"
                              />{" "}
                            </div>
                            <div className="comment-info">
                              <div className="comment-header">
                                <h5 className="comment-title">Joshua Cuddy</h5>
                                <span className="comment-meta-date">
                                  20 December, 2020
                                </span>
                              </div>
                              <div className="comment-content">
                                <p>
                                  Vestibulum pellentesque sitamet arcuporttitor
                                  maxi hasellus pellentesques.
                                </p>
                                <a href="#" className="btn-link comment-link">
                                  Reply
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <ul className="comment-list">
                          <li>
                            <div className="comment-author">
                              {" "}
                              <img
                                src="../public/assets/images/user_img_2.jpg"
                                alt=""
                                className="img-circle"
                              />{" "}
                            </div>
                            <div className="comment-info">
                              <div className="comment-header">
                                <h5 className="comment-title">
                                  Murray Thomason
                                </h5>
                                <span className="comment-meta-date">
                                  20 December, 2020
                                </span>
                              </div>
                              <div className="comment-content">
                                <p>
                                  Curabitur hendrerit fringilla enim a accumsan
                                  turpis aliquam frinnsequat ac orci.
                                </p>
                                <a href="#" className="btn-link comment-link">
                                  Reply
                                </a>
                              </div>
                            </div>
                            <ul className="childern">
                              <li>
                                <div className="comment-author">
                                  {" "}
                                  <img
                                    src="../public/assets/images/user_img_3.jpg"
                                    alt=""
                                    className="img-circle"
                                  />{" "}
                                </div>
                                <div className="comment-info">
                                  <div className="comment-header">
                                    <h5 className="comment-title">
                                      Eric Phelps
                                    </h5>
                                    <span className="comment-meta-date">
                                      20 December, 2020
                                    </span>
                                  </div>
                                  <div className="comment-content">
                                    <p>
                                      Curabitur hendrerit fringilla eilla
                                      hendrerit leo eget suscipit consequat ac
                                      orci.
                                    </p>
                                    <a
                                      href="#"
                                      className="btn-link comment-link"
                                    >
                                      Reply
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*comments close*/}
              </div>
              <div className="leave-comments">
                <div className="leave-comments-head">
                  <h3 className="leave-comments-title">Leave a comments</h3>
                </div>
                <div className="leave-comments-body">
                  <div className="row">
                    <form>
                      <div className="col-lg-6 col-md-6 col-md-6 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label required sr-only "
                            htmlFor="name"
                          />
                          <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Your  Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-md-6 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label required  sr-only"
                            htmlFor="email"
                          />
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Enter Email Address"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-md-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label required  sr-only"
                            htmlFor="website"
                          />
                          <input
                            id="website"
                            name="website"
                            type="text"
                            className="form-control"
                            placeholder="Enter your Website URL"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-md-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="textarea"
                          />
                          <textarea
                            className="form-control"
                            id="textarea"
                            name="textarea"
                            rows={5}
                            placeholder="Comments"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-md-6 col-xs-12">
                        <div className="form-group">
                          <button
                            id="singlebutton"
                            name="singlebutton"
                            className="btn btn-primary btn-sm"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              {/* widget-search-start */}
              <div className="widget widget-search">
                <div className="widget-body">
                  <form>
                    <div className="search-form">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Here"
                      />
                      <button type="Submit">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* widget-search-close */}
              {/* widget-categories-start */}
              <div className=" widget widget-categories">
                <div className="widget-head">
                  <h2 className="widget-title">Categories</h2>
                </div>
                <div className="widget-body">
                  <ul className="arrow">
                    <li className="active">
                      <a href="#"> Smartphones (01)</a>
                    </li>
                    <li>
                      <a href="#">Android Phones (02)</a>
                    </li>
                    <li>
                      <a href="#">iphone (03)</a>
                    </li>
                    <li>
                      <a href="#">iphone X (04)</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* widget-categories-close */}
              {/* widget-archievs-start */}
              <div className=" widget widget-categories">
                <div className="widget-head">
                  <h2 className="widget-title">Archievs</h2>
                </div>
                <div className="widget-body">
                  <ul className="arrow">
                    <li className="active">
                      <a href="#">December (2019)</a>
                    </li>
                    <li>
                      <a href="#">November (2019)</a>
                    </li>
                    <li>
                      <a href="#">October (2019)</a>
                    </li>
                    <li>
                      <a href="#">September (2019)</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* widget-archievs-close */}
              {/* widget-recent-post-start */}
              <div className=" widget widget-recent-post">
                <div className="widget-head">
                  <h2 className="widget-title">Recent Post</h2>
                </div>
                <div className="widget-body">
                  <ul>
                    <li>
                      <div className="recent-post">
                        <h5 className="recent-title ">
                          <a href="#" className="title">
                            Online Mobile Store E-Commerce Free Template
                          </a>
                        </h5>
                        <div className="meta">
                          <span className="meta-date"> 20 December, 2020</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="recent-post">
                        <h5 className="recent-title">
                          <a href="#" className="title">
                            Planning for Online Mobile Shopping? Visit us
                          </a>
                        </h5>
                        <div className="meta">
                          <span className="meta-date"> 19 December, 2020</span>{" "}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="recent-post">
                        <h5 className="recent-title">
                          <a href="#" className="title">
                            Mobile Phones Online Shopping{" "}
                          </a>
                        </h5>
                        <div className="meta">
                          <span className="meta-date">20 December, 2020</span>{" "}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* widget-recent-post-close*/}
              {/* widget-Tag start */}
              <div className=" widget widget-tags ">
                <div className="widget-head">
                  <h2 className=" widget-title">Tags</h2>
                </div>
                <div className="widget-body">
                  <a href="#">free template</a>
                  <a href="#">template</a>
                  <a href="#">responsive Template</a>
                  <a href="#">Mobile</a>
                  <a href="#">free website template </a>
                  <a href="#">E-Commerce</a>
                </div>
              </div>
              {/* widget-Tag close */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
