import React, { useState, useContext, useEffect } from "react";
import WebContext from "../../store/WebContaxt";
import SkeletonUi from "../layout/Skeleton";
import { Link } from "react-router-dom";

const Category = () => {
  const ctx = useContext(WebContext);
  const [data, setData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const getData = async () => {
    try {
      setShowLoader(true);
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/article-categories"
      );
      const resp = await response.json();
      setShowLoader(false);

      if (resp.success === true) {
        setData(resp.data);
      } else {
        throw new Error(resp.error);
      }
    } catch (error) {
      setShowLoader(false);
      ctx.gData.notifyWarning(process.env.REACT_APP_SERVER_ERROR_MSG);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Categories</h3>
        </div>
        <div className="card-body p-0">
          <div className="list-catergory">
            <div className="item-list">
              {showLoader === true && <SkeletonUi count={5} />}
              {!showLoader && data.length > 0 && (
                <ul className="list-group mb-0">
                  {data.map((element) => {
                    return (
                      <li key={element.name} className="list-group-item">
                        <Link
                          to={`/articles/${element.slug}`}
                          className="text-dark"
                        >
                          <i className="fa fa-building bg-primary text-primary" />{" "}
                          {element.name}
                          <span className="badgetext badge rounded-pill bg-light mb-0 mt-1">
                            {element.blogs_count}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Category);
