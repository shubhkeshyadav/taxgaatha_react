import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Notiflix from "notiflix";
import WebContext from "./../../store/WebContaxt";

function Menu() {
  const ctx = useContext(WebContext);
  const [data, setData] = useState([]);
  const serviceMenue = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/service-menu",
        {
          headers: {
            "Content-Type": "Application/Json",
          },
        }
      );

      const resp = await response.json();

      if (resp.success === true) {
        setData(resp.data);
      } else {
        throw new Error(resp.error);
      }
    } catch (error) {
      ctx.gData.notifyWarning(error.message);
    }
  };

  useEffect(() => {
    serviceMenue();
  }, []);

  return (
    <nav className="horizontalMenu clearfix d-md-flex">
      <div className="horizontal-overlapbg"></div>
      <ul className="horizontalMenu-list">
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <span className="horizontalMenu-click">
            <i className="horizontalMenu-arrow fa fa-angle-down"></i>
          </span>
          <a href="/#">
            Our Services <span className="fa fa-caret-down m-0"></span>
          </a>
          <ul className="sub-menu">
            {data.length > 0 &&
              data.map((element) => {
                return (
                  <li key={element.id}>
                    <Link to={`our-services/${element.slug}`}>
                      {element.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </li>
        <li>
          <span className="horizontalMenu-click">
            <i className="horizontalMenu-arrow fa fa-angle-down"></i>
          </span>
          <a href="/#">
            {" "}
            GST <span className="fa fa-caret-down m-0"></span>
          </a>
          <ul className="sub-menu">
            <li>
              <Link to="/gst/acts">GST Acts</Link>
            </li>
            <li>
              <Link to="/gst/rules">GST Rules</Link>
            </li>
            <li>
              <Link to="">GST Notification</Link>
            </li>
            <li>
              <Link to="">GST Order</Link>
            </li>
            <li>
              <Link to="">GST Law</Link>
            </li>
            <li>
              <Link to="">GST Form</Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="{{route('pages.subscription-plans')}}">Subscription Plans</a>
        </li>
        <li>
          <Link to="articles">Articles </Link>
        </li>
        <li>
          <Link to="contactus">
            Contact Us <span className="horizontal-arrow"></span>
          </Link>
        </li>
        <li className="d-lg-none mt-5 pb-2 mt-lg-0">
          <span>
            <a className="btn btn-secondary ad-post mt-1" href="/#">
              <i className="fa fa-search"></i> Search{" "}
            </a>
          </span>
        </li>
      </ul>
      <ul className="mb-0 pe-2">
        <li className="d-none d-lg-flex">
          <span>
            <a className="btn btn-secondary ad-post mt-1" href="/#">
              <i className="fa fa-search"></i> Search{" "}
            </a>
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
