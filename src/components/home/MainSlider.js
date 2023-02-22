const MainSlider = () => {
  return (
    <div id="main">
      <div
        id="carousel-indicators4"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators4 carousel-indicators">
          <li
            data-bs-target="#carousel-indicators4"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#carousel-indicators4"
            data-bs-slide-to="1"
            className=""
          ></li>
          <li
            data-bs-target="#carousel-indicators4"
            data-bs-slide-to="2"
            className=""
          ></li>
          <li
            data-bs-target="#carousel-indicators4"
            data-bs-slide-to="3"
            className=""
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              alt=""
              src="assets/images/slider/main-banner.jpg"
              data-holder-rendered="true"
            />
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              alt=""
              src="assets/images/slider/main-banner.jpg"
              data-holder-rendered="true"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              alt=""
              src="assets/images/slider/main-banner.jpg"
              data-holder-rendered="true"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              alt=""
              src="assets/images/slider/main-banner.jpg"
              data-holder-rendered="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
