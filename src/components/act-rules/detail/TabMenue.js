import React from "react";

const TabMenue = (props) => {
  return (
    <>
      <div className="wideget-user-tab">
        <div className="tab-menu-heading">
          <div className="tabs-menu1">
            <ul className="nav">
              <li>
                <a
                  href="#table_of_contents"
                  data-bs-toggle="tab"
                  className="active"
                >
                  Table Of Content
                </a>
              </li>
              <li>
                <a href="#sections" data-bs-toggle="tab" className="">
                  Sections/Rules
                </a>
              </li>
              <li>
                <a href="#schedule" data-bs-toggle="tab" className="">
                  Schedule
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabMenue;
