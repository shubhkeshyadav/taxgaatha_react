import { Link } from "react-router-dom";

const NextPrevButton = (props) => {
  let { prevData, nextData } = props;

  return (
    <div className="center-block text-center">
      <ul className="pagination mb-5 mb-lg-0">
        {prevData && (
          <li
            className="page-item page-prev"
            aria-disabled="true"
            aria-label="« Previous"
          >
            <Link className="page-link" aria-hidden="true" to={prevData}>
              Prev
            </Link>
          </li>
        )}

        {!prevData && (
          <li
            className="page-item page-prev"
            aria-disabled="true"
            aria-label="« Previous"
            style={{ cursor: "not-allowed" }}
          >
            <a
              className="page-link"
              style={{ pointerEvents: "none" }}
              href={undefined}
              aria-hidden="true"
            >
              Prev
            </a>
          </li>
        )}

        <li className="page-item active" aria-current="page">
          <a className="page-link" href={undefined}>
            &nbsp;
          </a>
        </li>

        {nextData && (
          <li className="page-item page-next">
            <Link
              className="page-link"
              to={nextData}
              rel="next"
              aria-label="Next »"
            >
              Next
            </Link>
          </li>
        )}
        {!nextData && (
          <li
            className="page-item page-next"
            aria-disabled="true"
            aria-label="Next »"
            style={{ cursor: "not-allowed" }}
          >
            <a
              className="page-link"
              style={{ pointerEvents: "none" }}
              href={undefined}
              aria-hidden="true"
            >
              Next
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NextPrevButton;
