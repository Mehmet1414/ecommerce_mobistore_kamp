import Slider from "../../components/Slider";

const MainPage = () => {
  return (
    <>
      <Slider />

      {/* <!-- mobile showcase --> */}
      <div className="space-medium">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo ">
                  <a href="#">
                    <img src="../public/assets/images/nexus.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img
                      src="../public/assets/images/display_img_1.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo ">
                  <a href="#">
                    <img src="../public/assets/images/iphone.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img
                      src="../public/assets/images/display_img_2.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo ">
                  <a href="#">
                    <img src="../public/assets/images/samsung.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img
                      src="../public/assets/images/display_img_3.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.mobile showcase --> */}
    </>
  );
};
export default MainPage;
