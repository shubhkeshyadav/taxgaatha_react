import React from "react";
import Pagination from "../layout/Pagination";
import ListLayout from "./ListLayout";
import SingleListItem from "./SingleListItem";

const Listing = () => {
  return (
    <ListLayout>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">GST Law List</h3>
        </div>
        <div className="card-body">
          <div className="table-responsive border-top mb-0 ">
            <table className="table table-bordered table-hover  mb-0">
              <thead className="bg-primary text-white text-nowrap">
                <tr>
                  <th className="text-white">S. No.</th>
                  <th className="text-white">List of Law</th>
                </tr>
              </thead>
              <tbody>
                <SingleListItem />
                <SingleListItem />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination currentPage={1} totalItems={4} onPageChange={() => {}} />
    </ListLayout>
  );
};

export default Listing;
