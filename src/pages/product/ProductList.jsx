import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ProductBlock from "../../components/ProductBlock";
import { useApi } from "../../hook/useApi";
import { setActiveMenu } from "../../redux/MenuSlice";

const ProductList = (item) => {
  const params = useParams();
  const dispatch = useDispatch();
  const [productList, setProductList] = useState(null);
  const menuState = useSelector((state) => state.menuState.activeMenu);
  const categoryState = useSelector((state) => state.categoryState);

  const api = useApi();

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

  useEffect(() => {
    (async () => {
      const categoryDetailResponce = await api.get(
        "shop/products",

        {
          params: {
            "productTaxons.taxon.code": params.code,
            "order[code]": "asc",
            "order[createdAt]": "asc",

            page: 1,
            itemsPerPage: 30,
          },
        }
      );

      console.log("categoryDetailResponce>>>", categoryDetailResponce.data);
      setProductList(categoryDetailResponce.data);
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
                      {categoryState?.categories.map((item, index) => (
                        <li key={index}>
                          <Link to={"/product/list/" + item.code}>{item.name}</Link>
                        </li>
                      ))}
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
                    <Link href="#">Size</Link>
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

                {productList?.map((item, index) => (
                  <div
                    className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30"
                    key={index}
                  >
                    <ProductBlock item={item} />
                  </div>
                ))}
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
