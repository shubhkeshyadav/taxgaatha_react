import { Link } from "react-router-dom";

const Schedule = (props) => {
  const { scheduleData } = props;
  return (
    <>
      <div className="tab-pane" id="schedule">
        <div className="card-body">
          <div className="table-responsive border-top mb-0 ">
            <table className="table table-bordered table-hover  mb-0">
              <thead className="bg-primary text-white text-nowrap">
                <tr>
                  <th className="text-white">S. No.</th>
                  <th className="text-white">Schedule Title</th>
                  <th className="text-white">Schedule Section</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData &&
                  scheduleData.length > 0 &&
                  scheduleData.map((el, index) => {
                    return (
                      <tr key={el.id}>
                        <td>
                          <Link to={`/gst/schedule-detail/` + el.slug}>
                            {index + 1}
                          </Link>
                        </td>
                        <td>
                          <h4 className="mb-2 fs-16 font-weight-semibold">
                            <Link to={`/gst/schedule-detail/` + el.slug}>
                              {el.schedule_title}
                            </Link>
                          </h4>
                        </td>
                        <td>
                          <h4 className="mb-2 fs-16 font-weight-light">
                            <Link to={`/gst/schedule-detail/` + el.slug}>
                              {el.schedule_no}
                            </Link>
                          </h4>
                        </td>
                      </tr>
                    );
                  })}
                {!scheduleData ||
                  (scheduleData.length < 1 && (
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

export default Schedule;
