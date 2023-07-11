import { Link } from "react-router-dom";

const AboutPage = () => {
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
                  <li>About</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.page-header--> */}

      {/* <!-- about --> */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="box">
                {/*  <!-- about description --> */}
                <div className="box-head">
                  <h2 className="head-title">Welcome To Mobistore</h2>
                </div>
                <div className="box-body">
                  <p className="lead">
                    Sitamet quam pretium pharetra erosno venenatis isuonevitae
                    nullnulla ulla is auctor metus eget accumsan consequatce non
                    pretium tellusvel viverra erivamus dignissimnisas idorci nec
                    mauris sagittis placerat eumattis erolla facilisaecenas
                    felis odiolacinia quis sagittis velvariuset odioeneanid
                    gravida antellam eget placerat tortlamdolor velelementum.
                  </p>
                  <p>
                    Pretium pharetra erosno venenatis isuonevitae nullnulla ulla
                    is auctor metus eget accumsan consequatce non pretium
                    tellusvel viverra erivamus lorem sereserons one
                    dignissimnisas idorci nec mauris sagittis placerat eumattis
                    erolla facilisaecenas felis odiolacinia quis sagittis
                    velvariuset odioeneanid gravida antellam eget placerates
                    tortlamdolor velelementum venenatis isuonevitae nullnulla
                    ulla is auctor metus eget accumsan .
                  </p>
                </div>
                {/* <!-- /.about description --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- counters --> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="box">
                <div className="box-head">
                  <h2 className="head-title">
                    Mobistore is a large company with
                  </h2>
                </div>
                <div className="box-body">
                  <div className="row">
                    {/* <!-- counter-block --> */}
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="counter-block">
                        <div className="counter-icon">
                          <img src="../public/assets/images/mobile_icon.png" alt="" />
                        </div>
                        <div className="counter-content">
                          <h3 className="counter-text">
                            1,00,000 <sup>+</sup>
                          </h3>
                          <h4>Products</h4>
                        </div>
                      </div>
                    </div>
                    {/* <!-- /.counter-block --> */}
                    {/* <!-- counter-block --> */}
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="counter-block">
                        <div className="counter-icon">
                          <img
                            src="../public/assets/images/user_icon.png"
                            alt=""
                          />
                        </div>
                        <div className="counter-content">
                          <h3 className="counter-text">
                            80,000 <sup>+</sup>
                          </h3>
                          <h4>Buyers</h4>
                        </div>
                      </div>
                    </div>
                    {/* <!-- /.counter-block --> */}
                    {/* <!-- counter-block --> */}
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="counter-block">
                        <div className="counter-icon">
                          <img
                            src="../public/assets/images/location_icon.png"
                            alt=""
                          />
                        </div>
                        <div className="counter-content">
                          <h3 className="counter-text">
                            100 <sup>+</sup>
                          </h3>
                          <h4>Cities</h4>
                        </div>
                      </div>
                    </div>
                    {/* <!-- /.counter-block --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.counters --> */}
        {/* <!-- features --> */}
        <div className="container">
          <div className="row ">
            {/* <!-- features-block --> */}
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mt40  mb40">
              <div className="feature">
                <div className="feature-content">
                  <h3>Our Mission</h3>
                  <p>
                    Mauris congue quis elitat imperdputte teraesent lobortis
                    mimptconvallis ortis porttiam augue sapieroin consectetur
                    volutpat pretium ligula acposuere.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- /.features-block --> */}
            {/* <!-- features-block --> */}
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mt40  mb40">
              <div className="feature">
                <div className="feature-content">
                  <h3>Our Vision</h3>
                  <p>
                    Fce euismodrcieget diaminia can utliauctor mollis
                    egetquisislrpis portaus mattisliquam tempor nislipsa varius
                    nulla ultriciesit anulla.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- /.features-block --> */}
            {/* <!-- features-block --> */}
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mt40 mb40">
              <div className="feature">
                <div className="feature-content">
                  <h3>Our Value</h3>
                  <p>
                    Vestlum pharetramnon ornaante ornaretiumse ullamcoiamquis
                    egtecenas sitamt nislut tellus ese haretra seron vesu
                    liberulla facenean.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- /.features-block --> */}
          </div>
        </div>
        {/* <!-- /.features --> */}
        <>
          {/* timeline */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="box">
                  <div className="box-head">
                    <h2 className="head-title">Mobistore Timeline</h2>
                  </div>
                  <div className="box-body">
                    <div className="row">
                      <>
                        {/* timeline-block */}
                        <ul className="timeline">
                          <li>
                            <div className="tl-circ" />
                            <div className="timeline-panel">
                              <div className="tl-heading">
                                <h3>2010 - 2012</h3>
                              </div>
                              <div className="tl-body">
                                <h4>Heading of History</h4>
                                <p>
                                  Aliquam molestie urna sed pharetra
                                  vestibulumentum sapien euismod onec rhoncus ex
                                  sed tiss eget eronmsedf agnaimperdiet sodala
                                  aliquam.
                                </p>
                              </div>
                            </div>
                          </li>
                          {/* /.timeline-block */}
                          {/* timeline-block */}
                          <li className="timeline-inverted">
                            <div className="tl-circ" />
                            <div className="timeline-panel">
                              <div className="tl-heading">
                                <h3>2013 - 2014</h3>
                              </div>
                              <div className="tl-body">
                                <h4>Heading of History</h4>
                                <p>
                                  Eollicitudin ex eu tortor ornare vulputate
                                  estibulum entum sapien euismod onec rhoncus ex
                                  sed tiss eget seromsern agnaimperdiet sodala
                                  aliquam.
                                </p>
                              </div>
                            </div>
                          </li>
                          {/* /.timeline-block */}
                          {/* timeline-block */}
                          <li>
                            <div className="tl-circ" />
                            <div className="timeline-panel">
                              <div className="tl-heading">
                                <h3>2014 - 2015</h3>
                              </div>
                              <div className="tl-body">
                                <h4>Heading of History</h4>
                                <p>
                                  Sed sollicitudin ex eu tortor ornare vulputate
                                  estibulum entum sapien euismod onec rhoncus ex
                                  sed tiss eget agnaimperdiet sodala aliquam.
                                </p>
                              </div>
                            </div>
                          </li>
                          {/* /.timeline-block */}
                          {/* timeline-block */}
                          <li className="timeline-inverted">
                            <div className="tl-circ" />
                            <div className="timeline-panel">
                              <div className="tl-heading">
                                <h3>2017 - 2018</h3>
                              </div>
                              <div className="tl-body">
                                <h4>Heading of History</h4>
                                <p>
                                  Vivamus sempnisi sed blandit accumsadui justo
                                  finibus turpis aornare eros lorem vitae exuis
                                  vitae eleifend diam phasellus ullamcornisi
                                  utellus luctus porttiton.
                                </p>
                              </div>
                            </div>
                          </li>
                          {/* /.timeline-block */}
                        </ul>
                      </>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default AboutPage;
