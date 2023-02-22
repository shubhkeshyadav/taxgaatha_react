import { NavLink } from "react-router-dom";

const DetailLeftSideBar = (props) => {
  const { otherData, currentSlug, title, baseUrl, displayKey } = props;
  return (
    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>
        <div className="card-body p-0">
          <div className="list-catergory">
            <div className="item-list">
              <ul className="list-group mb-0">
                {otherData.map((el) => {
                  return (
                    <li
                      key={el.id}
                      className={
                        currentSlug == el.slug
                          ? "list-group-item active"
                          : "list-group-item"
                      }
                    >
                      <NavLink
                        to={`${baseUrl + el.slug}`}
                        className="text-dark"
                      >
                        <i className="fa fa-file-text-o bg-warning text-warning" />{" "}
                        {el[displayKey]}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLeftSideBar;
