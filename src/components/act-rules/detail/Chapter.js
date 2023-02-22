import { Link } from "react-router-dom";

const Chapter = (props) => {
  const { chapterData } = props;
  return (
    <>
      <div className="tab-pane" id="sections">
        <div className="card-body">
          <div className="table-responsive border-top mb-0 ">
            <table className="table table-bordered table-hover  mb-0">
              <thead className="bg-primary text-white text-nowrap">
                <tr>
                  <th className="text-white">S. No.</th>
                  <th className="text-white">Chapters</th>
                  <th className="text-white">Sections/Rules</th>
                </tr>
              </thead>
              <tbody>
                {chapterData &&
                  chapterData.length > 0 &&
                  chapterData.map((el, index) => {
                    return (
                      <tr key={el.id}>
                        <td>
                          <Link to={`/gst/chapter-detail/` + el.slug}>
                            {index + 1}
                          </Link>
                        </td>
                        <td>
                          <h4 className="mb-2 fs-16 font-weight-semibold">
                            <Link to={`/gst/chapter-detail/` + el.slug}>
                              {el.chapter_title}
                            </Link>
                          </h4>
                        </td>
                        <td>
                          <h4 className="mb-2 fs-16 font-weight-light">
                            <Link to={`/gst/chapter-detail/` + el.slug}>
                              {el.section_no}
                            </Link>
                          </h4>
                        </td>
                      </tr>
                    );
                  })}

                {!chapterData ||
                  (chapterData.length < 1 && (
                    <tr>
                      <td colSpan="3">
                        <p className="text-center text-danger">
                          {process.env.REACT_APP_DATA_NOT_FOUND}
                        </p>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chapter;
