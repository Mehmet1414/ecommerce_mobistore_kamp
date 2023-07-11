import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setActiveMenu } from "../../redux/MenuSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.menuState.activeMenu);

  const handleClick = (menuName) => {
    if (menuState === menuName) {
      dispatch(setActiveMenu(null));
    } else {
      dispatch(setActiveMenu(menuName));
    }
  };
  const handleSubMenuClick = (e) => {
    e.stopPropagation();
  };
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
                  <li>Product List</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.page-header*/}

      {/* product-list */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              {/* sidenav-section */}
              <div id="cssmenu">
                <ul>
                  <li
                    className={
                      menuState === "category" ? "has-sub active" : "has-sub"
                    }
                    onClick={() => handleClick("category")}
                  >
                    <Link href="#">CATEGORY</Link>
                    <ul
                      style={{
                        display: menuState === "category" ? "block" : "none",
                      }}
                      onClick={handleSubMenuClick}
                    >
                      <li>
                        <Link href="#">Smart Phones</Link>
                      </li>
                      <li>
                        <Link href="#">Cell Phones</Link>
                      </li>
                      <li className="last">
                        <Link href="#">Android Phones</Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={
                      menuState === "brand" ? "has-sub active" : "has-sub"
                    }
                    onClick={() => handleClick("brand")}
                  >
                    <Link href="#">Brand (07)</Link>
                    <ul
                      style={{
                        display: menuState === "brand" ? "block" : "none",
                      }}
                      onClick={handleSubMenuClick}
                    >
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">Alcatel</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">Apple</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">Google</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">HTC</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">Samsung</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">Vivo</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">Nexus</span>
                        </label>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={
                      menuState === "price" ? "has-sub active" : "has-sub"
                    }
                    onClick={() => handleClick("price")}
                  >
                    <Link href="#">Price</Link>
                    <ul
                      style={{
                        display: menuState === "price" ? "block" : "none",
                      }}
                      onClick={handleSubMenuClick}
                    >
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">500-1000</span>
                        </label>
                      </li>
                      <li>
                        <span>
                          <label>
                            <input type="checkbox" />
                            <span className="checkbox-list">1000-2000</span>
                          </label>
                        </span>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">2000-5000</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">5000-10000</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">10000-1800</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">18000-25000</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">Above-25000</span>
                        </label>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={
                      menuState === "screenSize" ? "has-sub active" : "has-sub"
                    }
                    onClick={() => handleClick("screenSize")}
                  >
                    <Link href="#">Screen Size</Link>
                    <ul
                      style={{
                        display: menuState === "screenSize" ? "block" : "none",
                      }}
                      onClick={handleSubMenuClick}
                    >
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">3 - 3.9 inches</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">4 - 4.9 inches</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">5 - 5.9 inches</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">6 inch & above</span>
                        </label>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub">
                    <Link href="#">PROCESSOR CORES</Link>
                    <ul>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">Hexa Core</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">Octa Core</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">Quad Core</span>
                        </label>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub">
                    <Link href="#">FEATURES</Link>
                    <ul>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">3G Support</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">4G Support</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">Duel Camera</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">
                            Expandable Memory
                          </span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" />
                          <span className="checkbox-list">FM Radio</span>
                        </label>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* /.sidenav-section */}
            </div>
            <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb10 alignright">
                  <form>
                    <div className="select-option form-group">
                      <select name="select" className="form-control">
                        <option value={true}>Select</option>
                        <option value={true}>Best Match</option>
                        <option value={true}>Low Price</option>
                        <option value={true}>High Price</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                {/* product */}
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <Link to={"/product/detail"}>
                        <img
                          src="../public/assets/images/product_img_1.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <h5>
                        <Link to={"/product/detail"} className="product-title">
                          Google Pixel <strong>(128GB, Black)</strong>
                        </Link>
                      </h5>
                      <div className="product-meta">
                        <Link href="#" className="product-price">
                          $1100
                        </Link>
                        <Link href="#" className="discounted-price">
                          $1400
                        </Link>
                        <span className="offer-price">20%off</span>
                      </div>
                      <div className="shopping-btn">
                        <Link href="#" className="product-btn btn-like">
                          <i className="fa fa-heart" />
                        </Link>
                        <Link href="#" className="product-btn btn-cart">
                          <i className="fa fa-shopping-cart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.product */}
                {/* product */}
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <Link to={"/product/detail"}>
                        <img
                          src="../public/assets/images/product_img_2.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <h5>
                        <Link to={"/product/detail"} className="product-title">
                          HTC U Ultra <strong>(64GB, Blue)</strong>
                        </Link>
                      </h5>
                      <div className="product-meta">
                        <Link href="#" className="product-price">
                          $1200
                        </Link>
                        <Link href="#" className="discounted-price">
                          $1700
                        </Link>
                        <span className="offer-price">10%off</span>
                      </div>
                      <div className="shopping-btn">
                        <Link href="#" className="product-btn btn-like">
                          <i className="fa fa-heart" />
                        </Link>
                        <Link href="#" className="product-btn btn-cart">
                          <i className="fa fa-shopping-cart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.product */}
                {/* product */}
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <img
                        src="../public/assets/images/product_img_3.png"
                        alt=""
                      />
                    </div>
                    <div className="product-content">
                      <h5>
                        <Link href="#" className="product-title">
                          Samsung Galaxy Note 8
                        </Link>
                      </h5>
                      <div className="product-meta">
                        <Link href="#" className="product-price">
                          $1500
                        </Link>
                        <Link href="#" className="discounted-price">
                          $2000
                        </Link>
                        <span className="offer-price">40%off</span>
                      </div>
                      <div className="shopping-btn">
                        <Link href="#" className="product-btn btn-like">
                          <i className="fa fa-heart" />
                        </Link>
                        <Link href="#" className="product-btn btn-cart">
                          <i className="fa fa-shopping-cart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.product */}
                {/* product */}
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <img
                        src="../public/assets/images/product_img_3.png"
                        alt=""
                      />
                    </div>
                    <div className="product-content">
                      <h5>
                        <Link href="#" className="product-title">
                          Samsung Galaxy Note 8
                        </Link>
                      </h5>
                      <div className="product-meta">
                        <Link href="#" className="product-price">
                          $1500
                        </Link>
                        <Link href="#" className="discounted-price">
                          $2000
                        </Link>
                        <span className="offer-price">40%off</span>
                      </div>
                      <div className="shopping-btn">
                        <Link href="#" className="product-btn btn-like">
                          <i className="fa fa-heart" />
                        </Link>
                        <Link href="#" className="product-btn btn-cart">
                          <i className="fa fa-shopping-cart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.product */}
                {/* product */}
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <img
                        src="../public/assets/images/product_img_4.png"
                        alt=""
                      />
                    </div>
                    <div className="product-content">
                      <h5>
                        <Link href="#" className="product-title">
                          Vivo V5 Plus <strong>(Matte Black)</strong>
                        </Link>
                      </h5>
                      <div className="product-meta">
                        <Link href="#" className="product-price">
                          $1500
                        </Link>
                        <Link href="#" className="discounted-price">
                          $2000
                        </Link>
                        <span className="offer-price">15%off</span>
                      </div>
                      <div className="shopping-btn">
                        <Link href="#" className="product-btn btn-like">
                          <i className="fa fa-heart" />
                        </Link>
                        <Link href="#" className="product-btn btn-cart">
                          <i className="fa fa-shopping-cart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.product */}
                {/* product */}
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <img
                        src="../public/assets/images/product_img_2.png"
                        alt=""
                      />
                    </div>
                    <div className="product-content">
                      <h5>
                        <Link href="#" className="product-title">
                          HTC U Ultra <strong>(64GB, Blue)</strong>
                        </Link>
                      </h5>
                      <div className="product-meta">
                        <Link href="#" className="product-price">
                          $1200
                        </Link>
                        <Link href="#" className="discounted-price">
                          $1700
                        </Link>
                        <span className="offer-price">10%off</span>
                      </div>
                      <div className="shopping-btn">
                        <Link href="#" className="product-btn btn-like">
                          <i className="fa fa-heart" />
                        </Link>
                        <Link href="#" className="product-btn btn-cart">
                          <i className="fa fa-shopping-cart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.product */}
                {/* product */}
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <img
                        src="../public/assets/images/product_img_2.png"
                        alt=""
                      />
                    </div>
                    <div className="product-content">
                      <h5>
                        <Link href="#" className="product-title">
                          HTC U Ultra <strong>(64GB, Blue)</strong>
                        </Link>
                      </h5>
                      <div className="product-meta">
                        <Link href="#" className="product-price">
                          $1200
                        </Link>
                        <Link href="#" className="discounted-price">
                          $1700
                        </Link>
                        <span className="offer-price">10%off</span>
                      </div>
                      <div className="shopping-btn">
                        <Link href="#" className="product-btn btn-like">
                          <i className="fa fa-heart" />
                        </Link>
                        <Link href="#" className="product-btn btn-cart">
                          <i className="fa fa-shopping-cart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.product */}
                {/* product */}
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <img
                        src="../public/assets/images/product_img_3.png"
                        alt=""
                      />
                    </div>
                    <div className="product-content">
                      <h5>
                        <Link href="#" className="product-title">
                          Samsung Galaxy Note 8
                        </Link>
                      </h5>
                      <div className="product-meta">
                        <Link href="#" className="product-price">
                          $1500
                        </Link>
                        <Link href="#" className="discounted-price">
                          $2000
                        </Link>
                        <span className="offer-price">40%off</span>
                      </div>
                      <div className="shopping-btn">
                        <Link href="#" className="product-btn btn-like">
                          <i className="fa fa-heart" />
                        </Link>
                        <Link href="#" className="product-btn btn-cart">
                          <i className="fa fa-shopping-cart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.product */}
                {/* product */}
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <img
                        src="../public/assets/images/product_img_2.png"
                        alt=""
                      />
                    </div>
                    <div className="product-content">
                      <h5>
                        <Link href="#" className="product-title">
                          HTC U Ultra <strong>(64GB, Blue)</strong>
                        </Link>
                      </h5>
                      <div className="product-meta">
                        <Link href="#" className="product-price">
                          $1200
                        </Link>
                        <Link href="#" className="discounted-price">
                          $1700
                        </Link>
                        <span className="offer-price">10%off</span>
                      </div>
                      <div className="shopping-btn">
                        <Link href="#" className="product-btn btn-like">
                          <i className="fa fa-heart" />
                        </Link>
                        <Link href="#" className="product-btn btn-cart">
                          <i className="fa fa-shopping-cart" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.product */}
              </div>
              <div className="row">
                {/* pagination start */}
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="st-pagination">
                    <ul className="pagination">
                      <li>
                        <Link href="#" aria-label="previous">
                          <span aria-hidden="true">Previous</span>
                        </Link>{" "}
                      </li>
                      <li className="active">
                        <Link href="#">1</Link>
                      </li>
                      <li>
                        <Link href="#">2</Link>
                      </li>
                      <li>
                        <Link href="#">3</Link>
                      </li>
                      <li>
                        {" "}
                        <Link href="#" aria-label="Next">
                          <span aria-hidden="true">Next</span>
                        </Link>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* pagination close */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.product-list */}
    </>
  );
};

export default ProductList;
